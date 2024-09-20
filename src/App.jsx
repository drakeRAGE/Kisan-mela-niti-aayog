// App.js
import React from 'react';
import { FaLeaf, FaHandshake, FaMicrochip, FaMoneyBillWave, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.avif" alt="Krishi Niti Aayog Logo" className="logo-img" />
        <span>Krishi Niti Aayog</span>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Kisan Mela</h1>
        <p>Empowering farmers with knowledge and resources</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src="/farmer.avif" alt="Farmers in field" />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <FaLeaf />, title: "Crop Advisory", description: "Expert advice on crop selection and management" },
    { icon: <FaHandshake />, title: "Market Linkages", description: "Connect farmers with buyers for better prices" },
    { icon: <FaMicrochip />, title: "Technology Transfer", description: "Introducing modern farming techniques" },
    { icon: <FaMoneyBillWave />, title: "Financial Support", description: "Information on loans and subsidies" }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { title: "Annual Kisan Mela", date: "October 15-17, 2024", location: "Central Agricultural Grounds", image: "/firstEvent.jpg" },
    { title: "Organic Farming Workshop", date: "November 5, 2024", location: "Community Center", image: "/secondEvent.jpg" }
  ];

  return (
    <section className="events" id="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@krishinitiaayog.gov.in</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Events />
      <Footer />
    </div>
  );
}

export default App;