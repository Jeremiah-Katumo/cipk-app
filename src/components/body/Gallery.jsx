import React from "react";
import '../../public/assets/css/main.css';
import Header from "../header/Header";
import { GalleryBreadCrumb, GalleryDetails} from "../../breadcrumbs/GalleryBreadCrumb";
import Footer from "../footer/Footer";
// import { Carousel } from "./Portfolio";

function ImageDetails() {

    return (
        <>
        <Header id='gallerypage' />
        <main id="main">
            <GalleryBreadCrumb />
            <GalleryDetails />
        </main>
        <Footer />
        </>
    )
}

export default ImageDetails;