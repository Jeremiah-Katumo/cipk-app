import React from "react";
import '../../public/assets/css/main.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import DownloadBreadCrumb from "../../breadcrumbs/DownloadBreadCrumb";

function Downloads() {

    return (
        <>
        <Header id='downloads' />
        <main id="main">
            <DownloadBreadCrumb />
        </main>
        <Footer />
        </>
    )
}

export default Downloads;