import { Box, Typography } from "@mui/material";
import React from "react";
import Highlight from "react-highlight";

import "./FetchUrl.css";
import fetchUrlImg from "../assets/firebasereact.png";
const FirebaseReact = () => {
  return (
    <Box>
      <img src={fetchUrlImg} style={{ margin: "0px auto", height: "200px" }} />
      <Typography>
        Firebase is a mobile and web application development platform developed
        by Google. It provides a variety of tools and services that help
        developers create and manage applications, including real-time
        databases, cloud storage, analytics tools, and more.
     </Typography>
     <br />
     <Typography>
     Here I'm using it with react to build a simple CRUD app

     </Typography>

      <Highlight className="javascript">
        {
          "yarn create react-app\nyarn add firebase"
        }
      </Highlight>
      <Typography>
        Go to firebase then go to console.
        </Typography>
        <Typography>
        Create a new project.
        </Typography>
        <Typography>
        Go to project and copy configuration.
        </Typography>
        <Typography>
        Back in the project create a firebase.js file
      </Typography>

      <Highlight className="javascript">
        {`touch firebase.js`}
      </Highlight>
      <Typography>
        In firebase.js paste configuration
      </Typography>
      <Highlight className="javascript">
        {`import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXX",
  authDomain: "todofirebase1996.firebaseapp.com",
  projectId: "todofirebase1996",
  storageBucket: "todofirebase1996.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "1:XXXXXXXXXXX:web:XXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);`}

        </Highlight>
      <Typography>
        Go to firestore 
      </Typography>
      <Typography>
        Change DB rules to read/write
      </Typography>
      <Typography>
        Add a collection (ex: todos)
      </Typography>
      <Typography>
        Connect db to app
      </Typography>
      <Highlight className="javascript">
        {
            `// in firebase.js
// import
import { getFirestore } from "@firebase/firestore"
            
// after app
export const db =  getFirestore(app)
`
        }
      </Highlight>
      <Typography>
        In this app I'll explain CRUD starting with READ. We'll need to create a reference to which collection is going to be used. In App.js
      </Typography>
      <Highlight className="javascript">
        {`import {collection} from "firebase/firestore"
const todosDB = collection(db, “todos”);
        `}
      </Highlight>
      <Typography>
        Add todos state and use useEffect to get all the items into the state
      </Typography>
      <Highlight className="javascript-highlight">
        {`import {getDocs} from 'firebase/firestore'
import { db } from "./firebase"
const [todos, setTodos] = useState([]);
useEffect(() => {
    const getTodos =  async () => {
        const data = await getDocs(todosDB)
        setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }	
    getTodos();
},[])
`}
      </Highlight>
      <Typography>
        Then try and map through the todos and check if it's working
      </Typography>
      <Highlight className="javascript">
        {`return (
	<div>
        {
	    todos.map((todo) => {
            return <div><h1>{todo.title}</h1></div>
        });
        }
    </div>
        }
    )
`}
      </Highlight>
      <Typography>
        Add some inputs one for title state and one for content state to a new todo and add event listeners to onChange events on inputs
      </Typography>
      <Highlight className="javascript">
        {`const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const titleChangeHandler = (e) => {
    setTitle(e.target.value);
}

const contentChangeHandler = (e) => {
    setContent(e.target.value);
}


<input placeholder="title" onChange={titleChangeHandler} />
<input placeholder="content" onChange={contentChangeHandler} />

`}
      </Highlight>
      <Typography>
        Now to the create part of CRUD, import addDoc, then add a button to submit and bind it to a function "createTodo"
      </Typography>
      <Highlight className="javascript-highlight">
        {`import { addDoc } from "firebase/firestore"
const createTodo = async () => {
    await addDoc(todoDB, {title: title, content: content})
}
<button onClick={createTodo}>Add todo</button>
`}
      </Highlight>
      <Typography>
        Now for the update part.
      </Typography>
    </Box>
  );
};

export default FirebaseReact;
