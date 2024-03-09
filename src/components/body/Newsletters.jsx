import React from "react";
import '../../public/assets/css/main.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import NewsBreadCrumb from "../../breadcrumbs/NewsBreadCrumb";

function Newsletters() {

    return (
        <>
        <Header id='newsletters' />
        <main id="main">
            <NewsBreadCrumb />
        </main>
        <Footer />
        </>
    )
}

export default Newsletters;