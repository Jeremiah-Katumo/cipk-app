import React from 'react';
import '../../../public/assets/css/main.css';
import { CapacityBuildingBreadCrumb, CapacityBuildingDetails } from '../../../breadcrumbs/BreadCrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function CapacityBuilding() {

    return (
        <>
        <Header id='cm'/>
        <main id='main'>
            <CapacityBuildingBreadCrumb />
            <CapacityBuildingDetails />
        </main>
        <Footer />
        </>
    );
}

export default CapacityBuilding;