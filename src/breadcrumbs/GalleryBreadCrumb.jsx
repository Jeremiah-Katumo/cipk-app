import React from "react";
import '../public/assets/css/main.css';
import { Carousel } from "../components/body/Portfolio";

export function GalleryBreadCrumb() {

    return (
        <>
        <div class="breadcrumbs">
        <div class="page-header d-flex align-items-center">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>Image Details</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Image Details</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    )
}

export function GalleryDetails() {

    return (
        <>
        <section id="portfolio-details" className="portfolio-details">
            <div className="container" data-aos="fade-up">

                <Carousel />

                <div className="row justify-content-between gy-4 mt-4">

                <div className="col-lg-8">
                    <div className="portfolio-description">
                    <h2>This is an example of portfolio detail</h2>
                    <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                    <p>
                        Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                    </p>

                    <div className="testimonial-item">
                        <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <div>
                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        </div>
                    </div>

                    <p>
                        Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                    </p>
                    <p>
                        Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                    </p>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                        <li><strong>Category</strong> <span>Web design</span></li>
                        <li><strong>Client</strong> <span>ASU Company</span></li>
                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                        <li><strong>Project URL</strong> <a href="wwww.example.com">www.example.com</a></li>
                        <li><a href="www.example.com" className="btn-visit align-self-start">Visit Website</a></li>
                    </ul>
                    </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}
