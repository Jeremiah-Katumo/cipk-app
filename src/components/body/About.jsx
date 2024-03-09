import React from "react";
import '../../public/assets/css/main.css';
// import { aboutImgTwo } from '../../utils/Images';
// import { NavLink } from 'react-router-dom';

function About() {

    return (
        <>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>About Us</h2>
              <p>You can go through our brief description about CIPK.</p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">
                <h3>Background</h3>
                <img src="../../public/assets/img/about.jpg" className="img-fluid rounded-4 mb-4" alt="" />
                <p>The Council of Imams and Preachers of Kenya (CIPK) is a faith-based non-profit organization that unites respected Islamic Scholars, Imams, and Muslim Preachers from across Kenya. Established in 1997, CIPK has evolved into a robust network. It operates as a registered trust, uniting religious leaders (imams and preachers) to address the needs of both the Muslim community and society at large. The organization's growth has positioned it as a national umbrella entity, promoting respect for diverse religious, cultural, and tribal backgrounds, both within Kenya and beyond.</p>
                <p>With branches across Western, Eastern, North Eastern, Nyanza, and parts of Rift Valley, and headquartered in Mombasa, Coast Province, CIPK is committed to holistic development that encompasses social, spiritual, cultural, and economic dimensions.</p>
                <p>CIPK’s identity is informed by the vision, mission, and core values. Our mission describes why we exist. Our vision describes our aspiration for what our beneficiary community will become when we succeed in carrying out our mission. Our core values which are derived from our inert commitment and dedication to delivering on our mission with ultimate professionalism. Our vision and mission presents us with the opportunity to help our beneficiaries transform socio- economic opportunities into resilient, and sustainable livelihoods.</p>
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5 grid gap-3">
                  <h3>Mission</h3>
                  <p className="fst-italic">
                    We seek: “To transform marginalized communities by investing in socio- economic initiatives, health peace building initiatives, inclusive and equitable governance, and capacity building through strategic partnership with state and non-state actors”.
                  </p>
                  <h3>Vision</h3>
                  <p className='fst-italic'>
                    We envision: “A Society where human dignity and diversity has triumphed”
                  </p>
                  <h3>Core Values</h3>
                  <p className='fst-italic'>
                    At CIPK, our core values define who we are, and our sense of belonging.
                  </p>
                  <div className='d-flex grid gap-5'>
                    <div>
                      <ul>
                        <li><i className="bi bi-check-circle-fill"></i> God Fearing</li>
                        <li><i className="bi bi-check-circle-fill"></i> Integrity</li>
                        <li><i className="bi bi-check-circle-fill"></i> Professionalism</li>
                        <li><i className="bi bi-check-circle-fill"></i> Excellence</li>
                        <li><i className="bi bi-check-circle-fill"></i> Dignity</li>
                        <li><i className="bi bi-check-circle-fill"></i> Teamwork</li>
                      </ul>
                    </div>
                    {/* <div>
                      <ul>
                        <li><i className="bi bi-check-circle-fill"></i> Excellence</li>
                        <li><i className="bi bi-check-circle-fill"></i> Dignity</li>
                        <li><i className="bi bi-check-circle-fill"></i> Teamwork</li>
                      </ul>
                    </div> */}
                  </div>
                  {/* <div className="position-relative mt-4">
                    <a href="https://www.youtube.com" className="glightbox play-btn">
                      <img src="../../public/assets/img/about-2.jpg" className="img-fluid rounded-4" alt="" />;
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

          </div>
        </section>        
        </>
    );
}

export default About;