import React from 'react';
import '../../public/assets/css/main.css';
import { DepBreadCrumb } from '../../breadcrumbs/BreadCrumbs';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Departments() {

    return (
        <>
        <Header id='cm'/>
        <div id='main'>
            <DepBreadCrumb />
        </div>
        <Footer />
        </>
    );
}

export default Departments;