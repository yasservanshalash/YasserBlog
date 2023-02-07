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
import ExpressJs from './pages/ExpressJs';

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
}, {
  postId: 4,
  postTitle: "Express JS",
  postLink: "express-js",
  postImage: "expressjs"
}]
function App() {
  const [title, setTitle] = useState('');

  return (
    <div className="App">
      <NavBar setTitle={setTitle}/>
      <Routes>

        <Route path="/" element={<Home posts={posts} title={title}/>} />
        <Route path="/posts/fetch-url" element={<FetchUrl />} />
        <Route path='/posts/redux-toolkit' element={<ReduxToolkit />} />
        <Route path='/posts/firebase-react' element={<FirebaseReact />} />
        <Route path="/posts/express-js" element={<ExpressJs />} />
       </Routes>
    </div>
  )
}

export default App
