import { Box, Typography } from "@mui/material";
import React from "react";
import Highlight from "react-highlight";
import "./ExpressJs.css";
import ExpressImg from "../assets/expressjs.png";
const ExpressJs = () => {
  return (
    <Box sx={{ width: "1280px" }}>
      <img src={ExpressImg} />
      <Typography>
        Express JS is built on top of nodeJS and makes building an API way
        easier.
      </Typography>
      <Typography>
        Start by importing express, types, and initializing express
      </Typography>
      <Highlight className="javascript">
        {`import Express, { Request, Response } from "express";

const app = Express();
app.use(Express.json()); //this is a middleware to return data in JSON format`}
      </Highlight>
      <Typography>Heres some data to play with:</Typography>
      <Highlight className="javascript">
        {`const notes = [
  {
    id: 1,
    title: "HTML",
    content: "Learn HTML for webpage structure",
  },
  {
    id: 2,
    title: "CSS",
    content: "Learn CSS for webpage styling",
  },
  {
    id: 3,
    title: "JS",
    content: "Learn HTML for webpage structure",
  },
  {
    id: 4,
    title: "React",
    content: "Learn React the Javascript Library",
  },
];`}
      </Highlight>
      <Typography>Assign a port and listen on the app</Typography>
      <Highlight className="javascript">
        {` // assign methods to endpoints
const port = 4000;
app.listen(port, () => {
  console.log("Example app listening on port 4000!");
});`}
      </Highlight>
      <Typography>Now add the methods to the endpoints</Typography>
      <Highlight className="javascript">
        {`app.get("/notes", (req: Request, res: Response) => {
if(notes.length === 0) {
  res.status(404).json("No resources found")
} else {
  res.status(200).json(notes);
                  
}
});
                  
app.get("/notes/:id", (req: Request, res: Response) => {
const id = +req.params.id;
if(id === 0 || id > notes.length) {
  res.status(404).json("No resources found");
} else {
  const note = notes.find((note) => note.id === Number(id))
  if(note) {
    res.status(200).json(note)
  } else {
    res.status(404).json("resource not found")
  }
}
})

app.post('/notes', (req: Request, res: Response) => {
  const newId = notes[notes.length - 1].id + 1
  const newNote = Object.assign({id: newId}, req.body)
  notes.push(newNote);
  res.status(201).json(notes);
});

app.delete("/notes/:id", (req: Request, res: Response) => {
  if(+req.params.id === 0 || +req.params.id > notes.length) {
    res.status(404).json("Resource doesnt exist")
  } else {
    const result = notes.filter((note) => note.id !== Number(req.params.id))
    res.status(200).json(result)
  }
})
app.put("/notes/:id", (req: Request, res: Response) => {
  notes[Number(req.params.id) - 1] = req.body
  res.status(201).json(notes)
})
`}
      </Highlight>
      <Typography>
        You can also use the router middleware by initializing a router. i.e. const noteRouter = Express.Router(); The app will look like this
      </Typography>
      <Highlight className="javascript">
        {`// index.ts
import Express, {Request, Response} from "express";
import userRouter from './routes/user'

const app = Express();

app.use(Express.json());
app.use("/users", userRouter)

const port = 8000
app.listen(port, () => {
    console.log("Express server listening on port " + port)
})`}
      </Highlight>
      <Highlight className="javascript">
        {`// in userController.ts
import { Request, Response } from "express";

const userList = [
  {
    id: 1,
    name: "Yasser",
    age: 26,
    email: "yasservanshalash@gmail.com",
  },
  {
    id: 2,
    name: "Foo",
    age: 27,
    email: "foo@bar.com",
  },
  {
    id: 3,
    name: "Jane",
    age: 19,
    email: "Jane@doe.com",
  },
  {
    id: 4,
    name: "John",
    age: 33,
    email: "John@doe.com",
  },
];

export const getUsers = async (req: Request, res: Response) => {
  try {
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    userList.push(newUser);
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const result = userList.filter((user) => user.id !== +userId);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    userList[+userId - 1] = req.body;
    res.json(userList);
  } catch (error) {
    console.log(error);
  }
};
`}
      </Highlight>
      <Highlight className="javascript">
        {` // in user Router
import { Router } from "express";
import { getUsers, createUser, deleteUser, updateUser } from "../controllers/user";

const router = Router();

router.get("/", getUsers)

router.post("/", createUser)

router.delete("/:id", deleteUser)

router.put("/:id", updateUser)

export default router`}
      </Highlight>
    </Box>
  );
};

export default ExpressJs;
