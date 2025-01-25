import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [spendTime, setSpendTime] = useState(0);


  const handelAddToBookmark = blog => {
    if (!bookmarks.some((b) => b.id === blog.id)) {
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks);
    }else {
      alert('This Post already added')
    }
  }

  const handelSpendTime = (time) => {
    const newTime = spendTime + time.reading_time;
    setSpendTime(newTime);

    const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== time.id);

    setBookmarks(reamainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-10 justify-center my-10 max-w-7xl mx-auto">
        <Blogs handelAddToBookmark={handelAddToBookmark} handelSpendTime={handelSpendTime}></Blogs>
        <div className="bookmarks md:w-1/3">
          <Bookmarks bookmarks={bookmarks} spendTime={spendTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
