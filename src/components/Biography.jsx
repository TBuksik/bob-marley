import React from 'react'
import '../styles/Biography.css'

const Biography = () => {
  return (
    <section id="biography" className="biography-section">
      <div className="container">
        <div className="section-header">
          <h2>A Short Biography</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="biography-content">
          <div className="bio-intro">
            <h3>Who was Bob Marley?</h3>
            <p>
              Robert Nesta "Bob" Marley (February 6, 1945 – May 11, 1981) was a Jamaican singer, 
              songwriter, and musician who became an international icon of reggae music and Rastafarian culture. 
              Through his passionate and spiritual music, he became a global ambassador for Jamaica, 
              reggae music, and the message of love, unity, and social justice.
            </p>
          </div>

          <div className="bio-origins">
            <h3>Humble Beginnings</h3>
            <p>
              Bob Marley was born in the rural village of Nine Mile in Saint Ann Parish, Jamaica, 
              to Norval Sinclair Marley, a white Jamaican of English descent, and Cedella Malcolm, 
              a black Jamaican. Growing up in the impoverished community of Trench Town in Kingston, 
              Bob experienced firsthand the struggles of Jamaica's urban poor, which would later 
              deeply influence his music and message.
            </p>
            
            <blockquote className="marley-quote">
              "I don't have prejudice against myself. My father was a white and my mother was black. 
              Them call me half-caste or whatever. Me don't dip on nobody's side. Me don't dip on the 
              black man's side nor the white man's side. Me dip on God's side, the one who create me 
              and cause me to come from black and white."
            </blockquote>
          </div>

          <div className="bio-wailers">
            <h3>The Birth of The Wailers</h3>
            <p>
              In 1963, at just 18 years old, Bob Marley formed The Wailers with childhood friends 
              Peter Tosh and Bunny Wailer (Neville Livingston). The group was mentored by Joe Higgs, 
              a respected local musician who taught them harmony and guitar. Their first single, 
              "Simmer Down," became a Jamaican hit in 1964, marking the beginning of Bob's 
              legendary musical journey.
            </p>
            
            <div className="wailers-timeline">
              <div className="timeline-item">
                <div className="year">1963</div>
                <div className="event">Formation of The Wailers</div>
              </div>
              <div className="timeline-item">
                <div className="year">1964</div>
                <div className="event">"Simmer Down" becomes a hit</div>
              </div>
              <div className="timeline-item">
                <div className="year">1966</div>
                <div className="event">Marley moves to Delaware, USA briefly</div>
              </div>
              <div className="timeline-item">
                <div className="year">1967</div>
                <div className="event">Returns to Jamaica, embraces Rastafarianism</div>
              </div>
              <div className="timeline-item">
                <div className="year">1972</div>
                <div className="event">Signs with Island Records</div>
              </div>
            </div>
          </div>

          <div className="bio-evolution">
            <h3>From Ska to Reggae</h3>
            <p>
              The Wailers began their career during the ska era but evolved their sound through 
              rocksteady and into what would become known as reggae. Bob's distinctive vocal style, 
              combined with his spiritual lyrics and the group's innovative rhythms, helped define 
              the reggae genre. Their music became a vehicle for social commentary, spiritual 
              awakening, and cultural pride.
            </p>
          </div>

          <div className="bio-rastafari">
            <h3>Spiritual Awakening</h3>
            <p>
              In the late 1960s, Bob Marley embraced Rastafarianism, a religious and cultural 
              movement that profoundly influenced his music and worldview. This spiritual journey 
              brought themes of African identity, social justice, and unity to the forefront of 
              his songs. His dreadlocks became a symbol of his faith, and his music became a 
              means of spreading Rastafarian philosophy worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
