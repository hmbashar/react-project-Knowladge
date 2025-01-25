import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div>
            <h2 className="text-2xl">Bookmarks: {bookmarks.length}</h2>

            {
                bookmarks.length > 0 &&

                <div className="bookmarks-list-area md:flex md:flex-col md:gap-3 bg-gray-200 md:p-4 rounded-md mt-3">
                    {
                        bookmarks.map((book, index) => <Bookmark key={index} bookmark={book}></Bookmark>)
                    }
                </div>
            }
            
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
}
export default Bookmarks;