import React from 'react';
import '../../public/assets/css/main.css';
import { JobsBreadCrumb, JobsDetails } from '../../breadcrumbs/CareerBreadCrumb';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Jobs() {

    return (
        <>
        <Header id='jobs'/>
        <main id='main'>
            <JobsBreadCrumb />
            <JobsDetails />
        </main>
        <Footer />
        </>
    );
}

export default Jobs;