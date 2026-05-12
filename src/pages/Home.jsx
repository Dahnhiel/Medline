import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Workforce Assessments" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "100%", label: "Regulatory Compliance" },
  { value: "24/7", label: "Support Available" },
];

const services = [
  {
    icon: "fa-briefcase-medical",
    title: "Occupational & Workforce Health",
    desc: "Fitness-for-duty evaluations, return-to-work assessments, and medical screenings designed to keep your workforce safe and operational.",
    items: [
      "Fitness-for-Duty Evaluations",
      "Return-to-Work Assessments",
      "Medical Screenings",
    ],
  },
  {
    icon: "fa-brain",
    title: "Behavioral & Mental Health",
    desc: "Psychological evaluations and behavioral health assessments tailored for safety-sensitive roles and regulated industries.",
    items: [
      "Psychological Evaluations",
      "Behavioral Assessments",
      "Fitness-for-Duty Determinations",
    ],
  },
  {
    icon: "fa-stethoscope",
    title: "Clinical & Medical Support",
    desc: "Licensed, credentialed providers delivering on-site, mobile, and remote clinical services to meet your operational demands.",
    items: [
      "On-Site & Mobile Services",
      "Remote Service Delivery",
      "Emergency Medical Support",
    ],
  },
];

const whyUs = [
  {
    icon: "fa-shield-halved",
    title: "Fully Compliant",
    desc: "All services meet federal, state, and local regulatory requirements.",
  },
  {
    icon: "fa-certificate",
    title: "Licensed & Credentialed",
    desc: "Our team holds advanced credentials and board certifications.",
  },
  {
    icon: "fa-location-dot",
    title: "Flexible Delivery",
    desc: "On-site, mobile, and remote options to fit your organization.",
  },
  {
    icon: "fa-handshake",
    title: "Mission-Driven",
    desc: "We partner with you to build a healthier, safer workforce.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
            alt="Healthcare Background"
            className="w-full h-full object-cover"
          />
          {/* Modern Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "linear-gradient(105deg, #f0fbfb 30%, rgba(240, 251, 251, 0.8) 60%, rgba(11, 110, 110, 0.4) 100%)",
            }}
          ></div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 items-center gap-12">
          <div className="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-[#0B6E6E] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-teal-200">
              Trusted Healthcare Solutions
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#063d3d",
                lineHeight: 1.1,
              }}
            >
              Reliable. Compliant. <br />
              <span className="text-[#0B6E6E] italic">Mission-Ready</span>{" "}
              Healthcare.
            </h1>
            <p
              style={{ fontFamily: "DM Sans, sans-serif" }}
              className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed"
            >
              Medline Health Services, LLC delivers occupational health,
              behavioral health, and clinical support services that strengthen
              workforce readiness.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-[#0B6E6E] text-white rounded-lg font-bold hover:bg-[#085a5a] transition-all shadow-lg hover:shadow-teal-200/50"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#0B6E6E] text-[#0B6E6E] rounded-lg font-bold hover:bg-teal-50 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 border-t border-teal-100 pt-8">
              {["Licensed Providers", "HIPAA Compliant", "State Certified"].map(
                (c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                      <i className="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 uppercase tracking-tight">
                      {c}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right Side Glassmorphism Cards */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute top-10 right-0 w-72 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 animate-bounce-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-teal-600 rounded-xl">
                  <i className="fa-solid fa-user-shield text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">HIPAA Secure</h4>
                  <p className="text-xs text-slate-500">
                    Encrypted Patient Data
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 w-80 p-6 bg-[#063d3d]/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 text-white">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-yellow-400 text-xs"
                  ></i>
                ))}
              </div>
              <p className="text-sm italic font-light leading-relaxed">
                "Their evaluations are thorough and defensible. Instrumental for
                our compliance."
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-teal-400">
                — Occupational Health Lead
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Bar */}
      <section style={{ background: "#0B6E6E" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.85rem",
                    color: "#cce8e8",
                    marginTop: "0.4rem",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Who We Are</span>
            <div className="divider-teal"></div>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#063d3d",
                lineHeight: 1.25,
              }}
              className="mb-5"
            >
              Patient-Centered Care for a Safer Workforce
            </h2>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#4a6e6e",
                lineHeight: 1.85,
              }}
              className="mb-5"
            >
              Medline Health Services, LLC provides compliant, patient-centered
              medical and behavioral health services designed to support
              workforce readiness, public safety, and regulatory compliance.
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#4a6e6e",
                lineHeight: 1.85,
              }}
              className="mb-8"
            >
              Our licensed and credentialed providers serve safety-sensitive
              industries, bringing rigorous clinical expertise and a deep
              commitment to operational excellence.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "fa-building-columns",
                label: "Regulatory Expertise",
                desc: "Deep knowledge of federal and state occupational health requirements.",
              },
              {
                icon: "fa-users",
                label: "Team of Experts",
                desc: "PHDs, PMHNPs, and MSNs with board certifications.",
              },
              {
                icon: "fa-map-location-dot",
                label: "Flexible Delivery",
                desc: "On-site, mobile, and remote service models.",
              },
              {
                icon: "fa-file-medical",
                label: "Thorough Documentation",
                desc: "Complete, defensible medical records for every evaluation.",
              },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="p-5 rounded-lg card-hover"
                style={{ background: "#f0fbfb", border: "1px solid #d1e8e8" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "#0B6E6E" }}
                >
                  <i className={`fa-solid ${icon} text-white text-sm`}></i>
                </div>
                <h4
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#063d3d",
                  }}
                  className="mb-1"
                >
                  {label}
                </h4>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.8rem",
                    color: "#5a7a7a",
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "#f8fdfd" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">What We Offer</span>
            <div className="divider-teal mx-auto"></div>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#063d3d",
              }}
            >
              Our Core Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc, items }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-8 card-hover"
                style={{
                  border: "1px solid #e6f7f7",
                  borderTop: "3px solid #0B6E6E",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "#e6f7f7" }}
                >
                  <i
                    className={`fa-solid ${icon} text-xl`}
                    style={{ color: "#0B6E6E" }}
                  ></i>
                </div>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#063d3d",
                  }}
                  className="mb-3"
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.875rem",
                    color: "#5a7a7a",
                    lineHeight: 1.75,
                  }}
                  className="mb-5"
                >
                  {desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <i
                        className="fa-solid fa-circle-check text-sm"
                        style={{ color: "#0B6E6E" }}
                      ></i>
                      <span
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "0.85rem",
                          color: "#4a6e6e",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Why Choose Us</span>
            <div className="divider-teal mx-auto"></div>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#063d3d",
              }}
            >
              Healthcare Built on Trust & Compliance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#e6f7f7" }}
                >
                  <i
                    className={`fa-solid ${icon} text-xl`}
                    style={{ color: "#0B6E6E" }}
                  ></i>
                </div>
                <h4
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#063d3d",
                  }}
                  className="mb-2"
                >
                  {title}
                </h4>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.875rem",
                    color: "#5a7a7a",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20" style={{ background: "#063d3d" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <i
            className="fa-solid fa-quote-left text-4xl mb-6"
            style={{ color: "#0d8080" }}
          ></i>
          <blockquote
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.6,
            }}
            className="mb-8"
          >
            "The services provided by Medline Health Services have been
            instrumental in keeping our workforce safe and compliant. Highly
            recommend!"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "#0B6E6E" }}
            >
              <i className="fa-solid fa-user text-white text-sm"></i>
            </div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 600,
                  color: "white",
                  fontSize: "0.95rem",
                }}
              >
                Jessica
              </p>
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.8rem",
                  color: "#8abfbf",
                }}
              >
                HR Manager
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/testimonials" className="btn-white">
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #e6f7f7 0%, #f0fbfb 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">Ready to Get Started?</span>
          <div className="divider-teal mx-auto"></div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#063d3d",
            }}
            className="mb-5"
          >
            Strengthen Your Workforce Today
          </h2>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.95rem",
              color: "#4a6e6e",
              lineHeight: 1.8,
            }}
            className="mb-8"
          >
            Reach out for a consultation and discover how Medline Health
            Services can support your organization's health, safety, and
            compliance goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us Now
            </Link>
            <a href="tel:4044646925" className="btn-outline">
              <i className="fa-solid fa-phone mr-2"></i> 404-464-6925
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
