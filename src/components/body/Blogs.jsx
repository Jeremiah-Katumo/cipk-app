import React from "react";
import '../../public/assets/css/main.css';
import Header from "../header/Header";
import BlogsBreadCrumbs from "../../breadcrumbs/BlogsBreadCrumbs";
import Footer from "../footer/Footer";

const BlogPost = ({ imgSrc, category, title, authorImg, authorName, postDate }) => (
  <div className="col-xl-4 col-md-6">
    <article>
      <div className="post-img">
        <img src={imgSrc} alt="" className="img-fluid" />
      </div>

      <p className="post-category">{category}</p>

      <h2 className="title">
        <a href="/blogdetails">{title}</a>
      </h2>

      <div className="d-flex align-items-center">
        <img src={authorImg} alt="" className="img-fluid post-author-img flex-shrink-0" />
        <div className="post-meta">
          <p className="post-author-list">{authorName}</p>
          <p className="post-date">
            <time dateTime="2022-01-01">{postDate}</time>
          </p>
        </div>
      </div>
    </article>
  </div>
);

function Blogs() {
  const blogPosts = [
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Politics", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "Maria Doe", postDate: "Jan 1, 2022", },
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Market", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "Jane Doe", postDate: "Jan 1, 2022", },
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Sports", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "John Doe", postDate: "Jan 1, 2022", },
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Trade", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "James Doe", postDate: "Jan 1, 2022", },
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Politics", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "Lexy Doe", postDate: "Jan 1, 2022", },
    { imgSrc: "assets/img/blog/blog-1.jpg", category: "Development", title: "Dolorum optio tempore voluptas dignissimos", authorImg: "assets/img/blog/blog-author.jpg", authorName: "Joy Doe", postDate: "Jan 1, 2022", },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 posts-list">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}


function BlogsPage() {

    return (
        <>
        <Header id="blogs" />
        <main id="main">
            <BlogsBreadCrumbs />
            <Blogs />
        </main>
        <Footer />
        </>
    )
}

export default BlogsPage;