import React from 'react';
import '../public/assets/css/main.css';
import { Carousel } from '../components/body/Portfolio';

export function DepBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Departments</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Human Economic Strengthening</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function InclusiveGovernanceBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Inclusive Governance</h2>
                            <p>In order to fulfill our mandate, CIPK has offered to <strong>Train, Mentor,</strong> and <strong>Support</strong> women and youths engagement in leadership and governance in targeted counties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
                        <li>Inclusive Governance</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function InclusiveGovernenceDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    {/* <h2>This is an example of portfolio detail</h2> */}
                        <p>
                            Train, mentor, and support 200 women and youths in leadership and governance across targeted counties by 2027. Enhance youth participation through education, public forums, and policy formulation, encouraging commitment to inclusive governance.
                        </p>
                        <p>
                            Advocacy empowers youth, women, and children to express concerns, access information and services, and influence decision-making processes. Through media campaigns, committee participation, research dissemination, and dialogue, we advocate for crucial issues.
                            We will convene networking forums to amplify our voice on pertinent matters, guided by a comprehensive advocacy strategy aligning with our objectives.
                        </p>

                        <div className="testimonial-item">
                            <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                                Celebrating diversity requires thoughtful inclusion. Everyone must be recognized and appreciated for their talents, be provided with opportunities to get involved, and have their perspectives valued and heard.
                            <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <div>
                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                            <h3>Roy Mwavita</h3>
                            <h4>MEL Officer</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Approach information</h3>
                    <ul>
                        <li><strong>Development Approach</strong> <span>Inclusive Governance Initiative</span></li>
                        <li><strong>BY</strong> <span>CIPK</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com" style={{textDecoration: 'none'}}>www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start" style={{textDecoration: 'none'}}>Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}


export function SocioEconomicBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Socio-Economic Empowerment</h2>
                            <p>In order to fulfill our mandate, we aim to <strong>Empower</strong> youths and women in Lamu, Kwale, Kilifi, and Taita-Taveta Counties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
                        <li>Socio-Economic Empowerment</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function SocioEconomicDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    {/* <h2>This is an example of portfolio detail</h2> */}
                    <p>
                        Empower 200 youth and women in Lamu, Kwale, Kilifi, and Taita-Taveta Counties by 2027. This entails micro franchising, business start-up training, entrepreneurship, and micro-finance access, ultimately addressing marginalization through inclusive decision-making.
                    </p>

                    <div className="testimonial-item">
                        <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <div>
                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Approach information</h3>
                    <ul>
                        <li><strong>Approach</strong> <span>Socio-Economic Empowerment</span></li>
                        <li><strong>BY</strong> <span>CIPK</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com" style={{textDecoration: 'none'}}>www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start" style={{textDecoration: 'none'}}>Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}


export function PeaceBuildingBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Peace Building</h2>
                            <p>In order to fulfill our mandate, CIPK has offered to <strong>Train, Mentor,</strong> and <strong>Support</strong> women and youths engagement in leadership and governance in targeted counties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
                        <li>Peace Building</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function PeaceBuildingDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    {/* <h2>This is an example of portfolio detail</h2> */}
                        <p>
                            Train, mentor, and support 200 women and youths in leadership and governance across targeted counties by 2027. Enhance youth participation through education, public forums, and policy formulation, encouraging commitment to inclusive governance.
                        </p>
                        <p>
                            Advocacy empowers youth, women, and children to express concerns, access information and services, and influence decision-making processes. Through media campaigns, committee participation, research dissemination, and dialogue, we advocate for crucial issues.
                            We will convene networking forums to amplify our voice on pertinent matters, guided by a comprehensive advocacy strategy aligning with our objectives.
                        </p>

                        <div className="testimonial-item">
                            <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                                Celebrating diversity requires thoughtful inclusion. Everyone must be recognized and appreciated for their talents, be provided with opportunities to get involved, and have their perspectives valued and heard.
                            <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <div>
                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                            <h3>Roy Mwavita</h3>
                            <h4>MEL Officer</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Approach information</h3>
                    <ul>
                        <li><strong>Development Approach</strong> <span>Peace Building Initiatives</span></li>
                        <li><strong>BY</strong> <span>CIPK</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com" style={{textDecoration: 'none'}}>www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start" style={{textDecoration: 'none'}}>Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}


export function HealthCareBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Health Care</h2>
                            <p>In order to fulfill our mandate, CIPK has offered to <strong>Train, Mentor,</strong> and <strong>Support</strong> women and youths engagement in leadership and governance in targeted counties.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
                        <li>Health Care</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function HealthCareDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    {/* <h2>This is an example of portfolio detail</h2> */}
                        <p>
                            Train, mentor, and support 200 women and youths in leadership and governance across targeted counties by 2027. Enhance youth participation through education, public forums, and policy formulation, encouraging commitment to inclusive governance.
                        </p>
                        <p>
                            Advocacy empowers youth, women, and children to express concerns, access information and services, and influence decision-making processes. Through media campaigns, committee participation, research dissemination, and dialogue, we advocate for crucial issues.
                            We will convene networking forums to amplify our voice on pertinent matters, guided by a comprehensive advocacy strategy aligning with our objectives.
                        </p>

                        <div className="testimonial-item">
                            <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                                Celebrating diversity requires thoughtful inclusion. Everyone must be recognized and appreciated for their talents, be provided with opportunities to get involved, and have their perspectives valued and heard.
                            <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <div>
                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                            <h3>Roy Mwavita</h3>
                            <h4>MEL Officer</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Approach information</h3>
                    <ul>
                        <li><strong>Development Approach</strong> <span>Health Care Initiatives</span></li>
                        <li><strong>BY</strong> <span>CIPK</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com" style={{textDecoration: 'none'}}>www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start" style={{textDecoration: 'none'}}>Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}


export function CapacityBuildingBreadCrumb() {

    return (
        <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>Inclusive Governance</h2>
                            <p>Enhance CIPK's capacity for mission delivery and institutional sustainability beyond 2027. Develop program management structures, strengthen human resources, institute sustainability mechanisms, and foster effective governance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <ol>
                        <li><a href="/" style={{textDecoration: 'none'}}>Home</a></li>
                        <li>Inclusive Governance</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    );
}

export function CapacityBuildingDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    {/* <h2>This is an example of portfolio detail</h2> */}
                        <p>
                            Capacity building entails nurturing skills and talents within individuals and communities to navigate the evolving Kenyan context. We utilize tailored trainings, mentoring initiatives, and support for sustainable development. Our focus includes empowering youth, young women, and vulnerable children for socio-economic sustainability. We also prioritize enhancing competencies of CIPK staff, board, and management, while supporting our stakeholders and network partners.
                        </p>

                        <div className="testimonial-item">
                            <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                                Celebrating diversity requires thoughtful inclusion. Everyone must be recognized and appreciated for their talents, be provided with opportunities to get involved, and have their perspectives valued and heard.
                            <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <div>
                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                            <h3>Roy Mwavita</h3>
                            <h4>MEL Officer</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Approach information</h3>
                    <ul>
                        <li><strong>Development Approach</strong> <span>Capacity Building</span></li>
                        <li><strong>BY</strong> <span>CIPK</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com" style={{textDecoration: 'none'}}>www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start" style={{textDecoration: 'none'}}>Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}