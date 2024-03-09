import React, { useEffect } from 'react';
import '../../public/assets/css/main.css';

const MobileNavComponent = () => {
  useEffect(() => {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
    const navToggles = document.querySelectorAll('.mobile-nav-toggle');
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    const mobileNavToggle = () => {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    };

    const toggleMobileNavDropdown = el => {
      el.classList.toggle('active');
      el.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = el.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    };

    const setupMobileNavToggle = () => {
      navToggles.forEach(el => {
        el.addEventListener('click', event => {
          event.preventDefault();
          mobileNavToggle();
        });
      });
    };

    const setupHideMobileNavOnSamePageLinks = () => {
      document.querySelectorAll('#navbar a').forEach(navbarlink => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        navbarlink.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
    };

    const setupToggleMobileNavDropdowns = () => {
      navDropdowns.forEach(el => {
        el.addEventListener('click', event => {
          if (document.querySelector('.mobile-nav-active')) {
            event.preventDefault();
            toggleMobileNavDropdown(el);
          }
        });
      });
    };

    // Initialize all the functionalities
    setupMobileNavToggle();
    setupHideMobileNavOnSamePageLinks();
    setupToggleMobileNavDropdowns();

    // Clean up event listeners on component unmount
    return () => {
      navToggles.forEach(el => el.removeEventListener('click', mobileNavToggle));
      navDropdowns.forEach(el => el.removeEventListener('click', toggleMobileNavDropdown));
    };
  }, []); // Empty dependency array ensures this useEffect runs once on mount

    return (
        <>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </>
    );
}

export default MobileNavComponent;