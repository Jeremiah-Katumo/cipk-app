import React, { useEffect } from 'react';
import '../../public/assets/css/main.css';

const NavbarLinks = ({ link, title }) => {
    useEffect(() => {
        const navbarlinks = document.querySelectorAll('a');

        function navbarlinksActive() {
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;

                let section = document.querySelector(navbarlink.hash);
                if (!section) return;

                let position = window.scrollY + 200;

                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            })
        }

        window.addEventListener('load', navbarlinksActive);
        document.addEventListener('scroll', navbarlinksActive);

        return () => {
            window.removeEventListener('load', navbarlinksActive);
            document.removeEventListener('scroll', navbarlinksActive);
        };
    }, []);

    const anchorStyles = {
        textDecoration: 'none'
    }

    return (
        <div>
            <a style={ anchorStyles } href={ link }>{ title }</a>
        </div>
    );
}

export default NavbarLinks;