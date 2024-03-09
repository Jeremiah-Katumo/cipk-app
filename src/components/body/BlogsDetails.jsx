import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../public/assets/css/main.css';
import Header from '../header/Header';
import BlogDetailsBreadCrumbs from '../../breadcrumbs/BlogDetailsBreadCrumb';
import Footer from '../footer/Footer';
import { twitter, fb, ig, linkedIn,
         person, clock, chatDots } from '../../utils/Icons';
import { GlobalContext } from '../../context/GlobalContext';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

const PostItem = ({ imgSrc, title, date, link }) => (
    <div className="post-item mt-3">
      <img src={imgSrc} alt="" />
      <div>
        <h4><a href={link}>{title}</a></h4>
        <time dateTime={date}>{date}</time>
      </div>
    </div>
);
  
const BlogRecentPosts = () => (
<>
    <PostItem imgSrc="assets/img/blog/blog-recent-1.jpg" title="Nihil blanditiis at in nihil autem" date="Jan 1, 2024" link="/blogdetails" />
    <PostItem imgSrc="assets/img/blog/blog-recent-2.jpg" title="Quidem autem et impedit" date="Jan 1, 2024" link="/blogdetails" />
    <PostItem imgSrc="assets/img/blog/blog-recent-3.jpg" title="Id quia et et ut maxime similique occaecati ut" date="Jan 1, 2024" link="/blogdetails" />
    <PostItem imgSrc="assets/img/blog/blog-recent-4.jpg" title="Laborum corporis quo dara net para" date="Jan 1, 2024" link="/blogdetails" />
    <PostItem imgSrc="assets/img/blog/blog-recent-5.jpg" title="Et dolores corrupti quae illo quod dolor" date="Jan 1, 2024" link="/blogdetails" />
</>
);

const CategoryItem = ({ category, count }) => (
    <li>
      <a href={category.toLowerCase()}>
        {category} <span>({count})</span>
      </a>
    </li>
);
  
const CategoryList = () => (
<>
    <CategoryItem category="General" count={25} />
    <CategoryItem category="Lifestyle" count={12} />
    <CategoryItem category="Travel" count={5} />
</>
);

const TagItem = ({ category }) => (
    <li>
      <a href={category.toLowerCase()}>{category}</a>
    </li>
);
  
const TagList = () => (
<>
    <TagItem category="App" />
    <TagItem category="IT" />
    <TagItem category="Business" />
    <TagItem category="Mac" />
    <TagItem category="Design" />
    <TagItem category="Office" />
    <TagItem category="Creative" />
</>
);

const AdditionalCategoryItem = ({ category }) => (
    <li>
      <a href={category.toLowerCase()}>{category}</a>
    </li>
);
  
const AdditionalCategoryList = () => (
<>
    <AdditionalCategoryItem category="Creative" />
    <AdditionalCategoryItem category="Tips" />
    <AdditionalCategoryItem category="Marketing" />
</>
);

const SocialMediaLinks = ({ twitterHandle, fbHandle, igHandle, linkedInHandle }) => (
    <>
      <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">{twitter}</a>
      <a href={`https://facebook.com/${fbHandle}`} target="_blank" rel="noopener noreferrer">{fb}</a>
      <a href={`https://instagram.com/${igHandle}`} target="_blank" rel="noopener noreferrer">{ig}</a>
      <a href={`https://linkedin.com/${linkedInHandle}`} target="_blank" rel="noopener noreferrer">{linkedIn}</a>
    </>
);

/*-------------------------
----------BLOGS------------*/
const BlogDetailsInfo = () => (
    <ul>
      <li className="d-flex align-items-center">
        {person}
        <a href="/blogdetails">John Doe</a>
      </li>
      <li className="d-flex align-items-center">
        {clock}
        <a href="blogdetails">
          <time dateTime="2020-01-01">Jan 1, 2022</time>
        </a>
      </li>
      <li className="d-flex align-items-center">
        {chatDots}
        <a href="blogdetails">12 Comments</a>
      </li>
    </ul>
);

function BlogsDetails() {

    return (
        <>
        <section id="blog" class="blog">
            <div class="container" data-aos="fade-up">
                <div class="row g-5">
                    <div class="col-lg-8">
                        <article class="blog-details">
                            <div class="post-img">
                                <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid" />
                            </div>

                            <h2 class="title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h2>

                            <div class="meta-top">
                                <BlogDetailsInfo />
                            </div>

                            <BlogContent />

                            <div class="meta-bottom">
                                <i class="bi bi-folder"></i>
                                <ul class="cats">
                                    <li><a href="business">Business</a></li>
                                </ul>

                                <i class="bi bi-tags"></i>
                                <ul class="tags">
                                    <AdditionalCategoryList />
                                </ul>
                            </div>
                        </article>

                        <div class="post-author d-flex align-items-center">
                            <img src="assets/img/blog/blog-author.jpg" class="rounded-circle flex-shrink-0" alt="" />
                            <div>
                                <h4>Jane Smith</h4>
                                <div class="social-links">
                                <SocialMediaLinks twitterHandle="yourTwitterHandle" 
                                                fbHandle="yourFacebookHandle" 
                                                igHandle="yourInstagramHandle" 
                                                linkedInHandle="yourLinkedInHandle" />
                                </div>
                                <p>
                                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                                </p>
                            </div>
                        </div>

                        <BlogComments />

                    </div>

                    <div class="col-lg-4">

                        <div class="sidebar">

                        <div class="sidebar-item search-form">
                            <h3 class="sidebar-title">Search</h3>
                            <form action="" class="mt-3">
                                <input type="text" />
                                <button type="submit"><i class="bi bi-search"></i></button>
                            </form>
                        </div>

                        <div class="sidebar-item categories">
                            <h3 class="sidebar-title">Categories</h3>
                            <ul class="mt-3">
                                <CategoryList />
                            </ul>
                        </div>

                        <div class="sidebar-item recent-posts">
                            <h3 class="sidebar-title">Recent Posts</h3>

                            <div class="mt-3">

                                <BlogRecentPosts />
                            </div>

                        </div>

                        <div class="sidebar-item tags">
                            <h3 class="sidebar-title">Tags</h3>
                            <ul class="mt-3">
                                <TagList />
                            </ul>
                        </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

function BlogContent() {

    return (<>
        <div class="content">
            <p>
            Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
            Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
            </p>

            <p>
            Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
            </p>

            <blockquote>
            <p>
                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
            </p>
            </blockquote>

            <p>
            Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
            Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
            Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
            </p>

            <h3>Et quae iure vel ut odit alias.</h3>
            <p>
            Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
            Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
            Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
            </p>
            <img src="assets/img/blog/blog-inside-post.jpg" class="img-fluid" alt="" />

            <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
            <p>
            Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
            Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
            </p>
            <p>
            Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
            </p>

        </div>

    </>)
}


/* --------------------------
----------COMMENTS----------*/
const Comment = ({ imgSrc, author, date, content, replies }) => (
    <div className="comment">
      <div className="d-flex">
        <div className="comment-img"><img src={imgSrc} alt="prof" /></div>
        <div>
          <h5><a href="#reply-comment" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
          <time dateTime={date}>{date}</time>
          <p>{content}</p>
        </div>
      </div>
      {replies && replies.map((reply, index) => (
        <div key={`comment-reply-${index}`} className="comment comment-reply">
          <div className="d-flex">
            <div className="comment-img"><img src={reply.imgSrc} alt="prof" /></div>
            <div>
              <h5><a href="#reply-comment" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
              <time dateTime={reply.date}>{reply.date}</time>
              <p>{reply.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
);

function ReplyForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [comment, setComment] = useState("");
    // const [image, setImage] = useState(null);
    const { user } = useContext(GlobalContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            name,
            email,
            website
        };
        if (comment) {
            const data = new FormData();
            const commentName = Date.now() + comment.name;
            data.append("name", commentName);
            data.append("image", comment);
            newPost.photo = commentName;
            try {
                await axios.post("/upload", data);
            } catch(err) {}
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {}
    };


    return (
        <div className="reply-form" id="reply-comment">
            <h4>Leave a Reply</h4>
            <p>Your email address will not be published. Required fields are marked * </p>
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <input 
                            name="name" 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name*" 
                            autoFocus={true} 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6 form-group">
                        <input 
                            name="email" 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Email*" 
                            autoFocus={true}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        <input 
                            name="website" 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Website" 
                            autoFocus={true}
                            onChange={e => setWebsite(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        <textarea 
                            name="comment" 
                            className="form-control" 
                            placeholder="Your Comment*" 
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Post Comment</button>
            </form>
        </div>
    )
};

function BlogComments() {

    return (
        <>
        <div class="comments">

            <h4 class="comments-count">8 Comments</h4>
            <Comment imgSrc="assets/img/blog/comments-1.jpg" author="Georgia Reader" date="01 Jan,2024" content="Et rerum totam nisi..." />
            <Comment imgSrc="assets/img/blog/comments-2.jpg" author="Aron Alvarado" date="01 Jan,2024" content="Ipsam tempora sequi voluptatem..." replies={[
                    { imgSrc: "assets/img/blog/comments-3.jpg", author: "Lynda Small", date: "01 Jan,2024", content: "Enim ipsa eum fugiat fuga repellat..." },
                    { imgSrc: "assets/img/blog/comments-4.jpg", author: "Sianna Ramsay", date: "01 Jan,2024", content: "Et dignissimos impedit nulla et quo distinctio ex nemo..." },
                ]} 
            />
            <Comment imgSrc="assets/img/blog/comments-5.jpg" author="Nolan Davidson" date="01 Jan,2024" content="Distinctio nesciunt rerum reprehenderit sed..." />
            <Comment imgSrc="assets/img/blog/comments-6.jpg" author="Kay Duggan" date="01 Jan,2024" content="Dolorem atque aut. Omnis doloremque blanditiis..." />
            <ReplyForm />
            
        </div>
        </>
    )
}

function BlogsDetailsPage() {

    return (
        <>
        <Header id='blogsdetails' />
        <main id='main'>
            <BlogDetailsBreadCrumbs />
            <BlogsDetails />
        </main>
        <Footer />
        </>
    )
}

export default BlogsDetailsPage;