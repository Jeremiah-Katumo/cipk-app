import React, { useEffect, useState} from "react";
import '../../public/assets/css/main.css';
import imageOne from '../../public/assets/img/carousel/image1.png';
import imageTwo from '../../public/assets/img/carousel/image2.png';
import imageThree from '../../public/assets/img/carousel/image3.png';

export function Portfolio() {
    const portfolioItems = [
        { category: "app", name: "App 1", imgSrc: "../../public/assets/img/portfolio/app-1.png" },
        { category: "product", name: "Product 1", imgSrc: "../../public/assets/img/portfolio/product-1.png" },
        { category: "branding", name: "Branding 1", imgSrc: "../../public/assets/img/portfolio/branding-1.png" },
        { category: "books", name: "Books 1", imgSrc: "../../public/assets/img/portfolio/books-1.png" },
        { category: "app", name: "App 2", imgSrc: "../../public/assets/img/portfolio/app-2.png" },
        { category: "product", name: "Product 2", imgSrc: "../../public/assets/img/portfolio/product-2.png" },
    ];

    return (
        <section id="gallery" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Gallery</h2>
                    <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
                </div>

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <ul className="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Product</li>
                            <li data-filter=".filter-branding">Branding</li>
                            <li data-filter=".filter-books">Books</li>
                        </ul>
                    </div>

                    <div className="row gy-4 portfolio-container">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col-xl-4 col-md-6 portfolio-item filter-${item.category}`}>
                                <div className="portfolio-wrap">
                                    <a href={item.imgSrc} data-gallery={`portfolio-gallery-${item.category}`} className="glightbox" style={{textDecoration: 'none'}}>
                                        <img src={item.imgSrc} className="img-fluid" alt={item.name} />
                                    </a>
                                    <div className="portfolio-info">
                                        <h4><a href="/image-details" title="More Details" style={{textDecoration: 'none'}}>{item.name}</a></h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

// export function Carousel() {
//     // Replace the placeholder "..." with actual image sources
//     const carouselImages = [{img: imageOne}, {img: imageTwo}, {img: imageThree}];
//     const [currentState, setCurrentState] = useState(0);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (currentState === 2) {
//                 setCurrentState(0);
//             } else {
//                 setCurrentState(currentState+1);
//             }

//             return () => clearTimeout(timer);
//         }, 5000)
//     }, [currentState])

//     const goToNext = () => {
//         setCurrentState(currentState);
//     }

//     const bgImageStyles = {
//         backgroundImage: `url(${carouselImages[currentState].img})`,
//         backgroundPosition: 'center',
//         backgroundSize: '80%',
//         height: '600px',
//         width: '80%'
//     };
//     const myDivStyles = {
//         height: '600px',
//         width: '80%',
//         alignItems: 'center'
//     }

//     return (
//         <>
//         <div style={myDivStyles}>
//         <div id="carouselExampleIndicators" className="carousel slide h-400" data-ride="carousel">
            
//             <ol className="carousel-indicators">
//                 {carouselImages.map((_, index) => (
//                     <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
//                 ))}
//             </ol>
//             <div style={bgImageStyles}></div>
//             <div className="carousel-inner">
//                 {carouselImages.map((image, index) => (
//                     <span key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                         <img className="d-block w-100" onClick={() => goToNext(currentState)} src={image} alt={`Slide ${index + 1}`} />
//                     </span>
//                 ))}
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={() => goToNext(currentState)}>
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={() => goToNext(currentState)}>
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//         </div>
//         </>
//     );
// }


export function Carousel() {
    const carouselImages = [{img: imageOne}, {img: imageTwo}, {img: imageThree}];
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState+1);
            }

            return () => clearTimeout(timer);
        }, 5000)
    }, [currentState])

    const goToNext = () => {
        setCurrentState(currentState);
    }

    const bgImageStyles = {
        backgroundImage: `url(${carouselImages[currentState].img})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        height: '800px',
        // width: '80%'
    };


    return (
        <>
    <section id="portfolio-details" className="portfolio-details">
      <div className="container" data-aos="fade-up">
        <div className="position-relative h-100">
            <div className="slides-1 portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">

                <div style={bgImageStyles}></div>
                <div className="carousel-inner">
                    {carouselImages.map((image, index) => (
                        <span key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img className="d-block w-100" onClick={() => goToNext(currentState)} src={image} alt='' />
                        </span>
                    ))}
                </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
      </div>
    </section>
        </>
    );
}