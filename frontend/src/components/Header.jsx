import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <div className="logo-icon">🚂</div>
          <div className="logo-text">
            <span className="logo-main">RailBook</span>
            <span className="logo-sub">Indian Railway Booking</span>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/trains">Trains</Link>
          <a href="#pnr">PNR Status</a>
          <a href="#fare">Fare Alert</a>
          <a href="#tourism">Tourism</a>
        </nav>

        <div className="header-auth">
          {token ? (
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-register">Register</Link>
            </>
          )}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#pnr" onClick={() => setMenuOpen(false)}>PNR Status</a>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </div>
      )}

      <div className="header-banner">
        <span>🇮🇳 Book Train Tickets Online — Fast, Easy & Reliable</span>
      </div>
    </header>
  );
}

export default Header;
