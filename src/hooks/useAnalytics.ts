import { useEffect, useRef, useState } from "react";
import {
  trackScrollDepth,
  trackTimeOnPage,
  trackNavigation,
  trackSessionStart,
  trackSessionEnd,
  trackConversionFunnel,
  trackUserEngagement,
} from "../utils/mixpanel";

export const useAnalytics = () => {
  const [sectionsViewed, setSectionsViewed] = useState<string[]>([]);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);
  const startTime = useRef(Date.now());
  const scrollDepthTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    let lastScrollTime = 0;
    const startTimeValue = startTime.current;

    // Add a small delay to ensure Mixpanel is initialized
    const initTimer = setTimeout(() => {
      trackSessionStart();
      trackConversionFunnel("page_load");
      
      // Initial page load tracking
      trackNavigation("home", "scroll");
      trackUserEngagement("page_load", "hero_section");
    }, 100);

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 100) return;
      lastScrollTime = now;

      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        setMaxScrollDepth(scrollPercent);
      }

      // Track scroll milestones
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !scrollDepthTracked.current.has(milestone)
        ) {
          scrollDepthTracked.current.add(milestone);
          trackScrollDepth(milestone, "landing_page");
        }
      });

      // Track section visibility
      const sections = ["home", "courses", "about", "testimonials", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && !sectionsViewed.includes(section)) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

          if (isVisible) {
            setSectionsViewed((prev) => [...prev, section]);
            trackNavigation(section, "scroll");
            
            // Track conversion funnel progress
            const funnelStep = `${section}_viewed`;
            trackConversionFunnel(funnelStep);
            trackUserEngagement("section_view", section);
          }
        }
      });
    };

    // Track page exit
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeValue) / 1000);
      trackTimeOnPage(timeSpent, sectionsViewed);
      trackSessionEnd(timeSpent, sectionsViewed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      // Track final time on page
      const timeSpent = Math.round((Date.now() - startTimeValue) / 1000);
      trackTimeOnPage(timeSpent, sectionsViewed);
      trackSessionEnd(timeSpent, sectionsViewed);
    };
  }, [sectionsViewed, maxScrollDepth]);

  return {
    sectionsViewed,
    maxScrollDepth,
  };
};
