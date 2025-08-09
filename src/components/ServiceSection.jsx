import React from "react";
import "../styles/ServiceSection.css";

const services = [
  { title: "Web Design", description: "Modern UI/UX with responsive design." },
  {
    title: "App Development",
    description: "Cross-platform apps with Flutter/React Native.",
  },
  { title: "Branding", description: "Logo design, brand identity & strategy." },
  { title: "SEO", description: "Boost search visibility with optimization." },
  { title: "UI Animation", description: "Smooth transitions & interactions." },
  { title: "E-commerce", description: "Custom shop interfaces & UX flows." },
  {
    title: "API Integration",
    description: "Secure, scalable third-party APIs.",
  },
  { title: "CMS Solutions", description: "Dynamic content management." },
  {
    title: "Maintenance",
    description: "Keep your product updated and secure.",
  },
  { title: "Consulting", description: "Expert advice for digital strategies." },
];

const ServiceSection = () => {
  return (
    <section id="services" className="service-section">
      <div className="service-header">
        <h2>Our Services</h2>
      </div>

      <div className="service-scroll-wrapper">
        <div className="service-list-horizontal">
          {[...services, ...services].map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
