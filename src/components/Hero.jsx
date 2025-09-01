import React from 'react';
import { bobMarleyData } from '../data/bobMarleyData';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Robert Nesta <span className="highlight">"Bob"</span> Marley
            </h1>
            <p className="hero-subtitle">
              The King of Reggae • 1945 - 1981
            </p>
            <p className="hero-description">
              One good thing about music, when it hits you, you feel no pain.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">36</span>
                <span className="stat-label">Years of Life</span>
              </div>
              <div className="stat">
                <span className="stat-number">19</span>
                <span className="stat-label">Years of Music</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Eternal Legacy</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('biography').scrollIntoView({ behavior: 'smooth' })}>
                Explore His Life
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('music').scrollIntoView({ behavior: 'smooth' })}>
                Listen to Music
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
