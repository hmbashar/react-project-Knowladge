

const Blog = ({blog}) => {
    
    return (
        <div>
            <div className="single-post-area">

                <div className="single-post-thumb">
                    <img src={blog.cover} alt={blog.title} />
                </div>

                <div className="single-post-details">
                    <div className="single-post-author">
                        <div className="single-post-auth-img">
                            <img src={blog.author_img} alt={blog.title} />
                        </div>
                        <div className="single-post-author-details">
                            <h4>{blog.author}</h4>
                            <h6>{blog.posted_date}</h6>
                        </div>
                    </div>
                    <div className="single-post-reading-time">
                        <p>{blog.reading_time} min read</p>
                    </div>
                </div>
                <div className="single-post-title">
                    <h2>{blog.title}</h2>
                </div>
                <div className="single-post-tag">
                    
                </div>
                <div className="single-post-read-btn">
                    <a href="javascript.void()">Make as Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;