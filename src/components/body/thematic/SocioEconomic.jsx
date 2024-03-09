import React from 'react';
import '../../../public/assets/css/main.css';
import { SocioEconomicBreadCrumb, SocioEconomicDetails } from '../../../breadcrumbs/BreadCrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function SocioEconomic() {

    return (
        <>
        <Header id='cm'/>
        <main id='main'>
            <SocioEconomicBreadCrumb />
            <SocioEconomicDetails />
        </main>
        <Footer />
        </>
    );
}

export default SocioEconomic;