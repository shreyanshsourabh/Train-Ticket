import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import './Home.css';

const QUICK_LINKS = [
  { icon: '🎫', title: 'Book Ticket', desc: 'Reserve your seat instantly', to: '/login' },
  { icon: '📋', title: 'PNR Status', desc: 'Check your booking status', to: '#pnr' },
  { icon: '🗺️', title: 'Train Route', desc: 'View train schedules & routes', to: '#route' },
  { icon: '💰', title: 'Fare Enquiry', desc: 'Check fare between stations', to: '#fare' },
  { icon: '❌', title: 'Cancel Ticket', desc: 'Cancel and get refund', to: '#cancel' },
  { icon: '📊', title: 'Chart Status', desc: 'Seat availability charts', to: '#chart' },
];

const TRAIN_TYPES = [
  { name: 'Rajdhani Express', icon: '🔴', desc: 'Premium high-speed overnight trains' },
  { name: 'Shatabdi Express', desc: 'Day intercity express trains', icon: '🟠' },
  { name: 'Duronto Express', icon: '🟡', desc: 'Non-stop long distance trains' },
  { name: 'Vande Bharat', icon: '🟢', desc: 'Modern semi-high speed trains' },
];

function Home() {
  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Book Train Tickets</h1>
          <p>Fastest way to book Indian Railways tickets online</p>
        </div>
        <div className="hero-search">
          <SearchForm />
        </div>
      </section>

      {/* Quick Links */}
      <section className="section quick-links-section">
        <h2 className="section-title">Quick Services</h2>
        <div className="quick-links-grid">
          {QUICK_LINKS.map((link) => (
            <Link to={link.to} key={link.title} className="quick-card">
              <div className="quick-icon">{link.icon}</div>
              <div className="quick-title">{link.title}</div>
              <div className="quick-desc">{link.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Train Types */}
      <section className="section train-types-section">
        <h2 className="section-title">Train Categories</h2>
        <div className="train-types-grid">
          {TRAIN_TYPES.map((t) => (
            <div key={t.name} className="train-card">
              <span className="train-icon">{t.icon}</span>
              <div>
                <div className="train-name">{t.name}</div>
                <div className="train-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="section why-section">
        <h2 className="section-title">Why RailBook?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>Instant Booking</h3>
            <p>Confirm tickets in seconds with our lightning-fast booking engine.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>100% Secure</h3>
            <p>Your payment and personal data are fully protected.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Book tickets easily from any device, anytime.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h3>Real-time Updates</h3>
            <p>Get live PNR status and train running information.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to travel?</h2>
        <p>Create an account and book your first ticket today.</p>
        <Link to="/register" className="cta-btn">Get Started Free</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
