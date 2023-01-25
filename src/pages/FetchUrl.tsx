import { Box, Typography } from "@mui/material";
import React from "react";
import Highlight from "react-highlight";

import "./FetchUrl.css";
import fetchUrlImg from "../assets/fetchApi.jpg";
const FetchUrl = () => {
  return (
    <Box>
      <img src={fetchUrlImg} style={{ margin: "0px auto", height: "200px" }} />
      <Typography>
        In ReactJS or JavaScript, you can use the Fetch API to get data. Here's
        an example of how to use the Fetch API to make a GET request to an API
        and retrieve the data.
      </Typography>

      <Highlight className="javascript">
        {
          "fetch(url).then((response) => response.json()).then((response) => console.log(response));"
        }
      </Highlight>
      <Typography>
        You can also use FetchAPI with the async and await keywords. Here's an
        example of how to use the Fetch API to make a GET request to an API and
        retrieve the data by using async and await:
      </Typography>

      <Highlight className="javascript">
        {`async function fetchData() {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  setData(json);
  } catch (error) {
  console.error(error);
  }
}`}
      </Highlight>
      <Typography>
        Now, let's take a look at Axios. Axios is a popular library that
        provides a way to make HTTP requests in JavaScript. It is similar to
        Fetch API, but it provides some additional features, such as support for
        older browsers and the ability to cancel requests. To use Axios, you
        need to install it using npm or yarn, and then import it into your
        JavaScript file.
      </Typography>
      <Highlight className="javascript">
        {`import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => console.log(response.data))
.catch(error => console.error(error))`}
      </Highlight>
      <Typography>
        Axios is also asynchronous by default, which means that the browser will
        continue to execute other JavaScript code while the request is being
        made. But one of the advantage of Axios over Fetch API is it allow you
        to make synchronous request by using await keyword.
      </Typography>
      <Highlight className="javascript">
        {
          `async function getData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  } catch (error) {
  console.error(error);
  }
}
          
getData();`
        }
        </Highlight>
    </Box>
  );
};

export default FetchUrl;
