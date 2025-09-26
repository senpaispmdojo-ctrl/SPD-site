import mixpanel from "mixpanel-browser";

let isInitialized = false;

export const initializeMixpanel = () => {
  try {
    const MIXPANEL_TOKEN =
      import.meta.env.VITE_MIXPANEL_TOKEN || "PROJECT_TOKEN";

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: import.meta.env.MODE === "development",
      track_pageview: false,
      persistence: "localStorage",
      api_host: "https://api.mixpanel.com",
    });

    mixpanel.register({
      page: "SENPAIS PM DOJO Landing Page",
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    });

    isInitialized = true;
    console.log("Mixpanel initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Mixpanel:", error);
  }
};

export const trackEvent = (
  eventName: string,
  properties: Record<string, unknown> = {}
) => {
  if (!isInitialized) {
    console.warn("Mixpanel not initialized, skipping event:", eventName);
    return;
  }

  try {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    });
  } catch (error) {
    console.error("Mixpanel tracking error:", error);
  }
};

export const trackNavigation = (
  section: string,
  method: "menu_click" | "scroll" | "mobile_menu"
) => {
  trackEvent("Navigation Click", {
    section,
    method,
    page_section: section,
  });
};

export const trackCTA = (
  cta_type: string,
  location: string,
  cta_text: string
) => {
  trackEvent("CTA Click", {
    cta_type,
    location,
    cta_text,
    conversion_funnel: "registration_interest",
  });
};

export const trackCourseInterest = (
  action: string,
  details: Record<string, unknown> = {}
) => {
  trackEvent("Course Interest", {
    action,
    ...details,
  });
};

export const trackTestimonial = (
  action: string,
  company: string,
  person: string
) => {
  trackEvent("Testimonial Interaction", {
    action,
    company,
    person,
    social_proof_engagement: true,
  });
};

export const trackContact = (method: string, context: string) => {
  trackEvent("Contact Method Click", {
    contact_method: method,
    context,
    support_interest: true,
  });
};

export const trackScrollDepth = (depth: number, section: string) => {
  trackEvent("Scroll Depth", {
    depth_percentage: depth,
    section_reached: section,
    engagement_level: depth > 75 ? "high" : depth > 50 ? "medium" : "low",
  });
};

export const trackTimeOnPage = (timeSpent: number, sections: string[]) => {
  trackEvent("Time on Page", {
    time_spent_seconds: timeSpent,
    sections_viewed: sections,
    engagement_level:
      timeSpent > 300 ? "high" : timeSpent > 120 ? "medium" : "low",
  });
};

export const trackPricingInterest = (
  priceType: "early_bird" | "regular",
  context: string
) => {
  trackEvent("Pricing Interest", {
    price_type: priceType,
    context,
    pricing_consideration: true,
  });
};

export const trackExternalLink = (
  link_type: string,
  destination: string,
  context: string
) => {
  trackEvent("External Link Click", {
    link_type,
    destination,
    context,
    outbound_engagement: true,
  });
};

export const identifyUser = (
  userId: string,
  properties: Record<string, unknown> = {}
) => {
  if (!isInitialized) {
    console.warn("Mixpanel not initialized, skipping user identification");
    return;
  }

  try {
    mixpanel.identify(userId);
    mixpanel.people.set(properties);
  } catch (error) {
    console.error("Mixpanel identification error:", error);
  }
};

export const resetUser = () => {
  if (!isInitialized) {
    console.warn("Mixpanel not initialized, skipping user reset");
    return;
  }

  try {
    mixpanel.reset();
  } catch (error) {
    console.error("Mixpanel reset error:", error);
  }
};

export default mixpanel;
