import React from 'react';
import { bobMarleyData } from '../data/bobMarleyData';
import '../styles/Biography.css';

const Biography = () => {
  const { bio, quotes } = bobMarleyData;

  return (
    <section id="biography" className="biography">
      <div className="container">
        <div className="section-header">
          <h2>Biography</h2>
          <p>The life of a legend</p>
        </div>

        <div className="bio-content">
          <div className="bio-image">
            <img 
              src="https://via.placeholder.com/400x500/ff6b35/fff?text=Bob+Marley+Portrait" 
              alt="Bob Marley Portrait" 
              className="portrait"
            />
          </div>

          <div className="bio-text">
            <div className="bio-details">
              <h3>{bio.fullName}</h3>
              <div className="bio-info">
                <div className="info-item">
                  <strong>Born:</strong> {bio.birthDate}
                </div>
                <div className="info-item">
                  <strong>Died:</strong> {bio.deathDate}
                </div>
                <div className="info-item">
                  <strong>Birthplace:</strong> {bio.birthPlace}
                </div>
                <div className="info-item">
                  <strong>Nationality:</strong> {bio.nationality}
                </div>
                <div className="info-item">
                  <strong>Genres:</strong> {bio.genres.join(', ')}
                </div>
                <div className="info-item">
                  <strong>Instruments:</strong> {bio.instruments.join(', ')}
                </div>
                <div className="info-item">
                  <strong>Years Active:</strong> {bio.yearsActive}
                </div>
              </div>
            </div>

            <div className="bio-description">
              <p>{bio.description}</p>
            </div>
          </div>
        </div>

        <div className="quotes-section">
          <h3>Inspirational Quotes</h3>
          <div className="quotes-grid">
            {quotes.slice(0, 6).map((quote, index) => (
              <div key={index} className="quote-card">
                <blockquote>
                  "{quote}"
                </blockquote>
                <cite>- Bob Marley</cite>
              </div>
            ))}
          </div>
        </div>

        <div className="rastafari-section">
          <h3>Rastafari & Spirituality</h3>
          <div className="rastafari-content">
            <div className="rastafari-text">
              <p>
                Bob Marley's music was deeply influenced by his Rastafari faith. Rastafari is a religious 
                and political movement that began in Jamaica in the 1930s. Central to Rastafari is the 
                belief in the divinity of Haile Selassie I, the former Emperor of Ethiopia.
              </p>
              <p>
                Marley's conversion to Rastafari in the late 1960s profoundly influenced his music and 
                worldview. His songs often contained spiritual themes, calls for unity, and messages 
                of liberation and redemption.
              </p>
            </div>
            <div className="rastafari-colors">
              <div className="color-meaning">
                <div className="color red"></div>
                <span>Red - The blood of martyrs</span>
              </div>
              <div className="color-meaning">
                <div className="color gold"></div>
                <span>Gold - The wealth of Africa</span>
              </div>
              <div className="color-meaning">
                <div className="color green"></div>
                <span>Green - The vegetation of Jamaica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
