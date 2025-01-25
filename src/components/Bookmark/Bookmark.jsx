import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
    const {title, cover, posted_date} = bookmark;
    return (
        <div className="md:flex md:gap-2 items-center rounded-md bg-gray-100 md:p-3">
            <img className="w-14 rounded-full h-14" src={cover} alt="" />
            <div className="bookmarks-details">
                <h2>{title}</h2>
                <h5>{posted_date}</h5>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    Bookmark:PropTypes.object,
}
export default Bookmark;