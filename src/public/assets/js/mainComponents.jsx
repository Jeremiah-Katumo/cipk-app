import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Isotope from 'isotope';
import AOS from 'aos';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import PureCounter from 'path/to/PureCounter'; // Replace with actual path

const App = () => {
 
  useEffect(() => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector('#header');
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
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar a');

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

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToggle();
      })
    });

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
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

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const toggleScrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
      scrollTop.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },

        1200: {
          slidesPerView: 3,
        }
      }
    });

    /**
     * Porfolio isotope and filter
     */
    let portfolioIsotope = document.querySelector('.portfolio-isotope');

    if (portfolioIsotope) {

      let portfolioFilter = portfolioIsotope.getAttribute('data-portfolio-filter') ? portfolioIsotope.getAttribute('data-portfolio-filter') : '*';
      let portfolioLayout = portfolioIsotope.getAttribute('data-portfolio-layout') ? portfolioIsotope.getAttribute('data-portfolio-layout') : 'masonry';
      let portfolioSort = portfolioIsotope.getAttribute('data-portfolio-sort') ? portfolioIsotope.getAttribute('data-portfolio-sort') : 'original-order';

      window.addEventListener('load', () => {
        let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
          item
        }
        )
    


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Isotope from 'isotope';
import AOS from 'aos';
import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import PureCounter from 'path/to/PureCounter'; // Replace with actual path

const YourComponent = () => {
  useEffect(() => {
    "use strict";

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    const selectHeader = document.querySelector('#header');
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
      };
      window.addEventListener('load', headerFixed);
      document.addEventListener('scroll', headerFixed);
    }

    // ... (rest of your code)

  }, []);

  return (
    <div>
      {/* Your React component's JSX goes here */}
    </div>
  );
};

export default YourComponent;



//////////////////////////////////////////////

import React, { useEffect, useRef } from 'react';

const StickyHeader = () => {
  const selectHeaderRef = useRef(null);

  useEffect(() => {
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
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div id="header" ref={selectHeaderRef}>
      {/* Content of your sticky header goes here */}
    </div>
  );
};

export default StickyHeader;


//////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';

const NavbarLinks = () => {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll('#navbar a');

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
      // Cleanup event listeners when the component is unmounted
      window.removeEventListener('load', navbarlinksActive);
      document.removeEventListener('scroll', navbarlinksActive);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your navbar links goes here */}
    </div>
  );
};

export default NavbarLinks;



//////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';

const MobileNavToggle = () => {
  useEffect(() => {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToggle();
      });
    });

    return () => {
      // Cleanup event listeners when the component is unmounted
      document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.removeEventListener('click', mobileNavToggle);
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your mobile nav toggle goes here */}
    </div>
  );
};

export default MobileNavToggle;


/////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';

const NavbarLinkClick = () => {
  useEffect(() => {
    function navbarlinkClickHandler(navbarlink) {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    }

    document.querySelectorAll('#navbar a').forEach(navbarlink => {
      navbarlinkClickHandler(navbarlink);
    });

    return () => {
      // Cleanup event listeners when the component is unmounted
      document.querySelectorAll('#navbar a').forEach(navbarlink => {
        navbarlink.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your NavbarLinkClick goes here */}
    </div>
  );
};

export default NavbarLinkClick;


/////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';

const NavDropdownToggle = () => {
  useEffect(() => {
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    function navDropdownToggleHandler(el) {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      });
    }

    navDropdowns.forEach(el => {
      navDropdownToggleHandler(el);
    });

    return () => {
      // Cleanup event listeners when the component is unmounted
      navDropdowns.forEach(el => {
        el.removeEventListener('click', navDropdownToggleHandler);
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your NavDropdownToggle goes here */}
    </div>
  );
};

export default NavDropdownToggle;


///////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';

const ScrollTopButton = () => {
  useEffect(() => {
    const scrollTop = document.querySelector('.scroll-top');

    if (scrollTop) {
      const toggleScrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      };

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);

      scrollTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      return () => {
        // Cleanup event listeners when the component is unmounted
        window.removeEventListener('load', toggleScrollTop);
        document.removeEventListener('scroll', toggleScrollTop);
        scrollTop.removeEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your ScrollTopButton goes here */}
    </div>
  );
};

export default ScrollTopButton;


////////////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import Isotope from 'isotope';

const PortfolioIsotope = () => {
  useEffect(() => {
    const portfolioIsotopeContainer = document.querySelector('.portfolio-isotope');

    if (portfolioIsotopeContainer) {
      let portfolioFilter = portfolioIsotopeContainer.getAttribute('data-portfolio-filter') || '*';
      let portfolioLayout = portfolioIsotopeContainer.getAttribute('data-portfolio-layout') || 'masonry';
      let portfolioSort = portfolioIsotopeContainer.getAttribute('data-portfolio-sort') || 'original-order';

      window.addEventListener('load', () => {
        let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
          itemSelector: '.portfolio-item',
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort
        });

        let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
        menuFilters.forEach(function (el) {
          el.addEventListener('click', function () {
            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          });
        });
      });

      return () => {
        // Cleanup event listeners when the component is unmounted
        window.removeEventListener('load', () => {
          let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
            itemSelector: '.portfolio-item',
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort
          });
        });
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your PortfolioIsotope goes here */}
    </div>
  );
};

export default PortfolioIsotope;


////////////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    function aosInit() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    window.addEventListener('load', aosInit);

    return () => {
      // Cleanup event listener when the component is unmounted
      window.removeEventListener('load', aosInit);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Content for your AOSInit goes here */}
    </div>
  );
};

export default AOSInit;


///////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const ClientsSlider = () => {
  useEffect(() => {
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="clients-slider swiper-container">
      <div className="swiper-wrapper">
        {/* Your swiper slides go here */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ClientsSlider;


////////////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const Slides1Swiper = () => {
  useEffect(() => {
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="slides-1 swiper-container">
      <div className="swiper-wrapper">
        {/* Your swiper slides go here */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slides1Swiper;


////////////////////////////////////////////////////////////////////


import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const Slides3Swiper = () => {
  useEffect(() => {
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="slides-3 swiper-container">
      <div className="swiper-wrapper">
        {/* Your swiper slides go here */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slides3Swiper;


//////////////////////////////////////////////////////////////////////


// Slides1Swiper.jsx
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const Slides1Swiper = () => {
  useEffect(() => {
    new Swiper('.slides-1', {
      // ... other Swiper options
    });
  }, []);

  return (
    <div className="slides-1 swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {/* Content for slide 1 */}
        </div>
        <div className="swiper-slide">
          {/* Content for slide 2 */}
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slides1Swiper;
