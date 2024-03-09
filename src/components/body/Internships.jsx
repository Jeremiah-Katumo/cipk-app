import React from 'react';
import '../../public/assets/css/main.css';
import { InternBreadCrumb, InternDetails } from '../../breadcrumbs/CareerBreadCrumb';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Internships() {

    return (
        <>
        <Header id='jobs'/>
        <main id='main'>
            <InternBreadCrumb />
            <InternDetails />
        </main>
        <Footer />
        </>
    );
}

export default Internships;