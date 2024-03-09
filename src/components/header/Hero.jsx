import React from "react";
import '../../public/assets/css/main.css';

const Hero = () => (
  <>
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Welcome to <span>CIPK</span></h2>
            <p>Our vision is of a society triumphing in human dignity and diversity. Our mission is to transform marginalized communities through strategic partnerships with state and non-state actors, focusing on socio-economic initiatives, health, peace building, governance, and capacity building. With these strategic objectives, CIPK is poised to create lasting change, foster unity, and amplify the voices of those we serve.</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started" style={{textDecoration: 'none'}}>Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center" style={{textDecoration: 'none'}}><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="../public/assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className={`col-xl-3 col-md-6`} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="icon-box">
                  <div className="icon"><i className={`bi bi-${getIcon(index)}`}></i></div>
                  <h4 className="title"><a href="stretched-link" className="stretched-link" style={{textDecoration: 'none'}}>{getTitle(index)}</a></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

// Helper functions for dynamic content
const getIcon = (index) => {
  const icons = ['easel', 'gem', 'geo-alt', 'command'];
  return icons[index - 1];
};

const getTitle = (index) => {
  const titles = ['Lorem Ipsum', 'Sed ut perspiciatis', 'Mombasa - Malindi Highway, Prison Road, Kilifi', 'Nemo Enim'];
  return titles[index - 1];
};

export default Hero;
