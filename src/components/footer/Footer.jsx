import React from "react";
import '../../public/assets/css/main.css';

function Footer() {

    return (
        <footer id="footer" className="footer">

            <div className="container">
            <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                    <div>
                        <a href="/" className="logo d-flex align-items-center" style={{textDecoration: "none"}}>
                            <span>CIPK</span>
                        </a>
                        <p>With branches across Western, Eastern, North Eastern, Nyanza, and parts of Rift Valley, and headquartered in Mombasa, Coast Province, CIPK is committed to holistic development that encompasses social, spiritual, cultural, and economic dimensions.</p>
                        <div className="social-links d-flex mt-4">
                            <a href="twitter" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="fb" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="ig" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div>
                        <a href="/" className="logo d-flex align-items-center" style={{textDecoration: "none"}}>
                            <span>Partners</span>
                        </a>
                        <div className="social-links d-flex mt-4">
                            <a href="twitter" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="fb" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#home" style={{textDecoration: "none"}}>Home</a></li>
                        <li><a href="#about" style={{textDecoration: "none"}}>About us</a></li>
                        <li><a href="services" style={{textDecoration: "none"}}>Careers</a></li>
                        <li><a href="terms" style={{textDecoration: "none"}}>Terms of service</a></li>
                        <li><a href="policy" style={{textDecoration: "none"}}>Privacy policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-6 footer-links">
                    <h4>Thematic Areas</h4>
                    <ul>
                        <li><a href="/socio-economic" style={{textDecoration: "none"}}>Socio-Economic Empowerment and Livelihoods</a></li>
                        <li><a href="/inclusive-gov" style={{textDecoration: "none"}}>Inclusive Governance</a></li>
                        <li><a href="/peace-building" style={{textDecoration: "none"}}>Peace Building</a></li>
                        <li><a href="/health-care" style={{textDecoration: "none"}}>Health Care</a></li>
                        <li><a href="/capacity-building" style={{textDecoration: "none"}}>Capacity Building</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                    <h4>Contact Us</h4>
                    <p>
                        Mombasa - Malindi Highway <br />
                        Prison Road, Close to Public Works<br />
                        Kenya <br />
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@cipk.com<br />
                    </p>
                </div>

            </div>
            </div>

            <div className="container-bottom mt-4">
                <div className="copyright">
                    2024 &copy; Copyright <strong><span>CIPK</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* <!-- All the links in the footer should remain intact. --> */}
                    {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                    {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                    {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ --> */}
                    Designed by <a href="https://jeremykatumo.com/" style={{textDecoration: "none"}}><strong>@JKatush</strong></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;