import React from 'react';
import '../../../public/assets/css/main.css';
import { HealthCareBreadCrumb, HealthCareDetails } from '../../../breadcrumbs/BreadCrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function HealthCare() {

    return (
        <>
        <Header id='cm'/>
        <main id='main'>
            <HealthCareBreadCrumb />
            <HealthCareDetails />
        </main>
        <Footer />
        </>
    );
}

export default HealthCare;