import PropTypes from 'prop-types'; 
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({ blog, handelAddToBookmark }) => {

    return (
        <div className="mb-5">
            <div className="single-post-area md:flex md:flex-col justify-start gap-5">

                <div className="single-post-thumb">
                    <img className="w-full" src={blog?.cover} alt={blog?.title} />
                </div>

                <div className="single-post-details  md:flex md:gap-5 md:justify-between md:items-center">
                    <div className="single-post-author md:flex md:gap-5 md:items-center">
                        <div className="single-post-auth-img">
                            <img className="rounded-full w-14" src={blog?.author_img} alt={blog?.title} />
                        </div>
                        <div className="single-post-author-details">
                            <h4>{blog?.author}</h4>
                            <h6>{blog?.posted_date}</h6>
                        </div>
                    </div>
                    <div className="single-post-reading-time md:flex md:gap-2">
                        <p>{blog?.reading_time} min read</p>
                        <button className="text-red-600 cursor-pointer" onClick={() => handelAddToBookmark(blog)}><IoBookmarksOutline /></button>
                    </div>
                </div>
                <div className="single-post-title">
                    <h2 className="text-4xl">{blog?.title}</h2>
                </div>
                <div className="single-post-tag md:flex md:gap-2">
                    {
                        blog.hashtags.map((tag, index) => <span key={index}>{tag}</span>)
                    }
                </div>
                <div className="single-post-read-btn">
                    <a href="javascript.void()" className="text-blue-700 hover:text-green-700">Make as Read</a>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handelAddToBookmark:PropTypes.func
}

export default Blog;