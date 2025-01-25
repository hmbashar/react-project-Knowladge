import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
     <h1 className="bg-sky-900 text-white p-40 text-5xl">This is test tailwind css</h1>
    </>
  )
}

export default App
