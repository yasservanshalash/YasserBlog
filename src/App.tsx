import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Highlight from "react-highlight";

import NavBar from "./components/navbar/NavBar"
import Home from "./pages/Home"
// BLOG POSTS --------------------------------

import FetchUrl from './pages/FetchUrl';
import ReduxToolkit from './pages/ReduxToolkit'
import FirebaseReact from './pages/FirebaseReact';
// BLOG POSTS --------------------------------
import './App.css'
import "../node_modules/highlight.js/styles/base16/porple.css"

const posts = [{
  postId: 1,
  postTitle: "fetch url in JS (fetch API and axios)",
  postLink: "fetch-url",
  postImage: "fetchApi"
},{
  postId: 2,
  postTitle: "Redux Toolkit",
  postLink: "redux-toolkit",
  postImage: "reduxtoolkit"
},{
  postId: 3,
  postTitle: "Firebase React",
  postLink: "firebase-react",
  postImage: "firebasereact"
}]
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path="/" element={<Home posts={posts}/>} />
        <Route path="/posts/fetch-url" element={<FetchUrl />} />
        <Route path='/posts/redux-toolkit' element={<ReduxToolkit />} />
        <Route path='/posts/firebase-react' element={<FirebaseReact />} />
      </Routes>
    </div>
  )
}

export default App
