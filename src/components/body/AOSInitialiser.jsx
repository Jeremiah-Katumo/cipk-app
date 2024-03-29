import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitialiser = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return null; // This component doesn't render anything, so return null
};

export default AOSInitialiser;
