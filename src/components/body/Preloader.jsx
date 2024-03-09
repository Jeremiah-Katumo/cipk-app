import React, { useEffect } from 'react';
import '../../public/assets/css/main.css';

function Preloader() {

    useEffect(() => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            })
        }
    })

    return (
        <div id="preloader"></div>
    );
}

export default Preloader;