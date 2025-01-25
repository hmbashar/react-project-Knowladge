import {useState, useEffect} from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookmark, handelSpendTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then (res => res.json())
        .then(data => setBlogs(data))
    }, []);
    
    return (
        <div className="md:w-2/3">
           {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handelAddToBookmark={handelAddToBookmark} handelSpendTime={handelSpendTime}></Blog>)
           }
        </div>
    );
};

Blogs.propTypes = {
    handelAddToBookmark:PropTypes.func,
    handelSpendTime:PropTypes.func
}

export default Blogs;