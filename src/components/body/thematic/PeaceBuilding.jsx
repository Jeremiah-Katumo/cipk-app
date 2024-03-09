import React from 'react';
import '../../../public/assets/css/main.css';
import { PeaceBuildingBreadCrumb, PeaceBuildingDetails } from '../../../breadcrumbs/BreadCrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function PeaceBuilding() {

    return (
        <>
        <Header id='hes'/>
        <main id='main'>
            <PeaceBuildingBreadCrumb />
            <PeaceBuildingDetails />
        </main>
        <Footer />
        </>
    );
}

export default PeaceBuilding;