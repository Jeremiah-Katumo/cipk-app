import React from 'react';
import '../../../public/assets/css/main.css';
import { InclusiveGovernanceBreadCrumb, InclusiveGovernenceDetails } from '../../../breadcrumbs/BreadCrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function InclusiveGovernance() {

    return (
        <>
        <Header id='hes'/>
        <main id='main'>
            <InclusiveGovernanceBreadCrumb />
            <InclusiveGovernenceDetails />
        </main>
        <Footer />
        </>
    );
}

export default InclusiveGovernance;