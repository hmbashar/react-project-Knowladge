import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import {useState} from 'react'
function App() {

  const [bookmarks, setBookmarks] = useState([]);


  const handelAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-10 justify-center my-10 max-w-7xl mx-auto">
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <div className="bookmarks md:w-1/3">
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>        
      </div>
    </>
  )
}

export default App
