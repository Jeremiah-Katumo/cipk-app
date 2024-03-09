import React from "react";
import '../public/assets/css/main.css';

function BlogDetailsBreadCrumbs() {

    return (
        <>
        <div class="breadcrumbs">
        <div class="page-header d-flex align-items-center">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>Blog Details</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>Blog Details</li>
                    </ol>
                </div>
            </nav>
        </div>
        </>
    )
}

export default BlogDetailsBreadCrumbs;