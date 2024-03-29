import React from "react";
import '../../public/assets/css/main.css';
import About from "../body/About";
import CallToAction from "../body/CallToAction";
import Team from "../body/Team";
import FreqQuizes from "../body/FreqQuizes";
import { Portfolio } from "../body/Portfolio";
// import Clients from "../body/Clients";
import Contact from '../body/Contact';

function Main() {

    return (
        <>
        <div id='main'>
            <About />
            {/* <Clients /> */}
            <CallToAction />
            <Team />
            <FreqQuizes />
            <Portfolio />
            {/* <Carousel /> */}
            <Contact />
        </div>
        </>
    );
}

export default Main;