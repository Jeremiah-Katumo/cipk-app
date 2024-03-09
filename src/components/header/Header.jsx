import { useEffect, useRef } from 'react';
import React from 'react';
import '../../public/assets/css/main.css';
import MobileNavComponent from '../navigation/MobileNavToggle';
import Navigation from '../navigation/Navigation';
import Logo from '../../public/assets/img/logo.png';
// import NavbarLinks from '../navigation/NavbarLinks';

function Header() {
    const selectHeaderRef = useRef(null);

    useEffect(() => {

        // const preloader = document.querySelector('#preloader');
        // if (preloader) {
        //     window.addEventListener('load', () => {
        //         preloader.remove();
        //     });
        // }

        const selectHeader = selectHeaderRef.current;
        if (selectHeader) {
            let headerOffset = selectHeader.offsetTop;
            let nextElement = selectHeader.nextElementSibling;

            const headerFixed = () => {
                if ((headerOffset - window.scrollY) <= 0) {
                    selectHeader.classList.add('sticked');
                    if (nextElement) nextElement.classList.add('sticked-header-offset');
                } else {
                    selectHeader.classList.remove('sticked');
                    if (nextElement) nextElement.classList.remove('sticked-header-offset');
                }
            }

            window.addEventListener('load', headerFixed);
            document.addEventListener('scroll', headerFixed);

            return () => {
                // Cleanup event listeners when the component is unmounted
                window.removeEventListener('load', headerFixed);
                document.removeEventListener('scroll', headerFixed);
            };
        }
    }, [])

    return (
        <>
        <section id="topbar" className="topbar d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-lg-between">
                <div className="contact-info d-flex align-items-center">
                    <div className='d-flex'>
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:cipktaitatavetabranchgroup@yahoo.com" style={{textDecoration: "none"}}>. Mailbox </a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span> +25479 55488 55</span></i>
                    </div>                 
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="https://twitter.com" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="https://facebook.com" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://instagram.com" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>

            <div className="container authentication-div d-flex justify-content-md-between">
                <div className="contact-info authentication-info">
                    
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <div className='gap-md'>
                        <i><a href="/login" style={{textDecoration: "none"}}>Login</a></i>
                        <i><a href="/register" style={{textDecoration: "none"}}><span>Register</span></a></i>
                    </div>
                </div>
            </div>
        </section>

        <header id="header" className="header d-flex align-items-center" ref={selectHeaderRef}>

            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center" style={{textDecoration: "none"}}>
                    {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                    <img src={Logo} alt="logo" style={{overflow: 'hidden'}}/>
                    <h1> CIPK</h1>
                </a>
                
                <Navigation />

                <MobileNavComponent />
            </div>
        </header>
        </>
    );
}

export default Header;