import React from 'react';
import '../../public/assets/css/main.css';
import { InternBreadCrumb, InternDetails } from '../../breadcrumbs/CareerBreadCrumb';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import AOSInitialiser from './AOSInitialiser'

function Internships() {

    return (
        <>
        <Header id='jobs'/>
        <main id='main'>
            <InternBreadCrumb />
            <InternDetails />
        </main>
        <Footer />
        <AOSInitialiser />
        </>
    );
}

export default Internships;