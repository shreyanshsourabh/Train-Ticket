import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-logo">🚂 RailBook</div>
          <p>India's trusted online train ticket booking platform. Book fast, travel safe.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><a href="#pnr">PNR Status</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#book">Book Tickets</a></li>
            <li><a href="#cancel">Cancel Ticket</a></li>
            <li><a href="#chart">Chart Availability</a></li>
            <li><a href="#refund">Refund Status</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📞 139 (Railway Helpline)</li>
            <li>📧 support@railbook.in</li>
            <li>🕐 24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RailBook. All rights reserved. | A project inspired by IRCTC</p>
      </div>
    </footer>
  );
}

export default Footer;
