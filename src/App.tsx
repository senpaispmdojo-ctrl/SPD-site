import { useState } from "react";
import {
  Menu,
  X,
  Users,
  Award,
  Target,
  Star,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  Sword,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="size-20 rounded-full bg-red-400">
                <img src="/logo.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </button>
              <a
                target="_blank"
                href="https://forms.gle/EDbEjZ2qcsVRX82u8"
                className="block"
              >
                <button className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-semibold">
                  Begin Training
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
              >
                Contact
              </button>
              <a
                target="_blank"
                href="https://forms.gle/EDbEjZ2qcsVRX82u8"
                className="block"
              >
                <button className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-semibold">
                  Begin Training
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-gray-50 via-white to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                  <Zap className="w-4 h-4 mr-2" />
                  EARLY BIRD: ₦25,000 - Ends October 31st!
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                  Master Product Management at the
                  <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                    {" "}
                    SENPAIS PM DOJO
                  </span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Train like a warrior, think like a strategist. Join Nigeria's
                  premier Product Management academy where ancient discipline
                  meets modern product mastery. Your sensei awaits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  target="_blank"
                  href="https://forms.gle/EDbEjZ2qcsVRX82u8"
                  className="block"
                >
                  <button className="bg-gradient-to-r from-red-600 to-black text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center">
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">₦25,000</div>
                    <div className="text-sm text-red-600 font-semibold">
                      Early Bird
                    </div>
                    <div className="text-xs text-gray-600">Until Oct 31</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">
                      ₦39,000
                    </div>
                    <div className="text-sm text-gray-600">Regular Price</div>
                    <div className="text-xs text-gray-500">After Oct 31</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">50+</div>
                    <div className="text-sm text-gray-600">Spots Max</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black rounded-3xl transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Product Management Training - Nigerian Professional"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-red-600">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-black">
                      Internship Opportunities Available
                    </div>
                    <div className="text-sm text-gray-600">
                      Industry Recognition
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Why Train at SENPAIS PM DOJO?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ancient wisdom meets modern product strategy in Nigeria's most
              disciplined training ground
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sword className="w-8 h-8" />,
                title: "Warrior Mindset",
                description:
                  "Develop the mental discipline and strategic thinking of a product samurai",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dojo Community",
                description:
                  "Train alongside fellow Nigerian product ninjas and build lasting bonds",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Black Belt Certification",
                description:
                  "Earn your PM black belt recognized across Nigeria's tech ecosystem",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Career Mastery",
                description:
                  "90% of our ninjas land PM roles within 4 months of graduation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Training Programs
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose your path to Product Management mastery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "White Belt to Black Belt",
                subtitle: "Complete PM Mastery Program",
                duration: "12 weeks",
                level: "Beginner to Advanced",
                earlyPrice: "₦25,000",
                regularPrice: "₦39,000",
                features: [
                  "Product strategy & vision mastery",
                  "User research & market analysis",
                  "Iteration and Post-Launch Strategies",
                  "Data-driven decision making",
                  "Stakeholder management techniques",
                  "Go-to-market strategy",
                  "Product metrics & KPIs",
                  "Leadership & team building",
                  "1-on-1 sensei mentorship",
                  "Career placement assistance",
                  "Lifetime dojo community access",
                ],
                popular: true,
                badge: "Most Popular",
              }
            ].map((course, index) => (
              <div
                key={index}
                className={`relative col-span-2 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  course.popular
                    ? "ring-2 ring-red-600 transform scale-105"
                    : "border-2 border-gray-200"
                }`}
              >
                {course.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`${
                        course.popular
                          ? "bg-gradient-to-r from-red-600 to-black"
                          : "bg-gray-800"
                      } text-white px-6 py-2 rounded-full text-sm font-bold`}
                    >
                      {course.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-black">
                      {course.title}
                    </h3>
                    <p className="text-red-600 font-semibold">
                      {course.subtitle}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-3xl font-bold text-red-600">
                          {course.earlyPrice}
                        </span>
                        <span className="text-sm text-gray-600 ml-2">
                          Early Bird
                        </span>
                      </div>
                      <div className="text-gray-400">|</div>
                      <div>
                        <span className="text-2xl font-bold text-gray-600">
                          {course.regularPrice}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          Regular
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-red-600 font-semibold">
                      Early Bird ends October 31st!
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    target="_blank"
                    href="https://forms.gle/EDbEjZ2qcsVRX82u8"
                    className="block"
                  >
                    <button
                      className={`w-full py-4 rounded-xl font-bold transition-all ${
                        course.popular
                          ? "bg-gradient-to-r from-red-600 to-black text-white hover:shadow-lg transform hover:-translate-y-0.5"
                          : "border-2 border-gray-800 text-gray-800 hover:border-red-600 hover:text-red-600"
                      }`}
                    >
                      Begin Training
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">
                  Train Under Master Senseis
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our dojo is led by battle-tested Product Management masters
                  who have built successful products across Nigeria's thriving
                  tech ecosystem and global markets.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "5+", label: "Master Senseis" },
                  {
                    number: "5+",
                    label: "Nigerian Companies Hiring Our Ninjas",
                  },
                  { number: "24/7", label: "Dojo Support" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="text-3xl font-bold text-red-600">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">
                  Master These Ancient Arts:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Strategic Product Planning",
                    "User Research & Analytics",
                    "Iteration and Post-Launch Strategies",
                    "Go-to-Market Strategy",
                    "Stakeholder Management",
                    "Product Metrics & KPIs",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Sword className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Nigerian Product Management Team Training"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h4 className="text-xl font-bold mb-2">Real-World Battles</h4>
                <p className="text-sm opacity-90">
                  Practice with actual Nigerian market scenarios
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-red-50 to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Success Stories from Our Ninjas
            </h2>
            <p className="text-xl text-gray-700">
              See how our graduates are conquering Nigeria's tech landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Adaora Okafor",
                role: "Senior PM at Paystack",
                company: "Paystack",
                image:
                  "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
                testimonial:
                  "SENPAIS PM DOJO transformed my mindset. The discipline and strategic frameworks helped me land my dream role at Paystack. The sensei's guidance was invaluable!",
              },
              {
                name: "Kemi Adebayo",
                role: "Product Lead",
                company: "Flutterwave",
                image:
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                testimonial:
                  "The dojo's unique approach combining discipline with practical skills is unmatched. I went from junior to product lead in 8 months. The community support is incredible!",
              },
              {
                name: "Chinedu Okwu",
                role: "VP of Product",
                company: "Kuda Bank",
                image:
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
                testimonial:
                  "Training at SENPAIS was like unlocking a new level in my career. The mentorship and real-world projects prepared me for executive leadership. Highly recommend!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-red-600"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-700 text-sm">{testimonial.role}</p>
                    <p className="text-red-600 text-sm font-bold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-red-600 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Begin Your Training?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join hundreds of Nigerian product ninjas who started their
                  journey at SENPAIS PM DOJO. Your transformation awaits.
                </p>
              </div>

              <div className="bg-red-600 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  ⚡ Early Bird Special
                </h3>
                <div className="space-y-2">
                  <p className="text-white">
                    Save ₦14,000 when you register before October 31st!
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">
                      ₦25,000
                    </span>
                    <span className="text-lg text-red-200 line-through">
                      ₦39,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email the Dojo</h4>
                    <p className="text-gray-300">senpaispmdojo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Call the Sensei
                    </h4>
                    <a href="tel:+2347063472279" className="text-gray-300">
                      +234 (0) 706 347 2279
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Visit the Dojo</h4>
                    <p className="text-gray-300">
                      Lagos, Nigeria & Online Training
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-black mb-2">
                Begin Your Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Complete payment first, then fill our registration form to
                secure your spot
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-xl border-2 border-red-600">
                  <h4 className="font-bold text-red-600 mb-2">
                    Step 1: Make Payment
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Transfer to our account:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Bank:</strong> Access Bank
                    </p>
                    <p>
                      <strong>Account:</strong> 1239389517
                    </p>
                    <p>
                      <strong>Name:</strong> Adaeze Chukwu
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-black mb-2">
                    Step 2: Registration Form
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    After payment, complete your registration:
                  </p>
                  <a
                    target="_blank"
                    href="https://forms.gle/EDbEjZ2qcsVRX82u8"
                    className="block"
                  >
                    <button className="w-full bg-gradient-to-r from-red-600 to-black text-white py-3 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                      Access Registration Form
                    </button>
                  </a>
                </div>

                <div className="text-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=+2347063472279&text=Hello, I have questions about the training."
                    target="_blank"
                    className="text-xs text-gray-500"
                  >
                    Questions? WhatsApp us +234 (0) 706 347 2279
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center">
                  <Sword className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">SENPAIS</span>
                  <div className="text-xs text-red-400 font-semibold">
                    PM DOJO
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                Nigeria's premier Product Management training dojo. Master the
                art of product strategy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">
                Training Program
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    White to Black Belt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advanced Ninja Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    1-on-1 Mentorship
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://medium.com/@senpaispmdojo"
                    className="hover:text-white transition-colors"
                  >
                    PM Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:senpaispmdojo@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    Contact Sensei
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 SENPAIS PM DOJO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/company/senpais-pm-dojo/?viewAsMember=true"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Senpaispmdojo"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/senpaispmdojo/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
