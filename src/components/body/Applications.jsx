import React from 'react';
import '../../public/assets/css/main.css';
import { ApplicationBreadCrumb, ApplicationDetails } from '../../breadcrumbs/CareerBreadCrumb';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Application() {

    return (
        <>
        <Header id='hes'/>
        <div id='main'>
            <ApplicationBreadCrumb />
            <ApplicationDetails />
        </div>
        <Footer />
        </>
    );
}

export default Application;