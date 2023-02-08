import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Post = {
    postId: number;
    postTitle: string;
    postLink: string;
    postImage: string;
}

const Home = ({posts, keyword} : {posts: Post[], keyword: string}) => {
  return (
    <div>
      <Box>
        <Typography variant="h4">
        Welcome to my Blog where I keep records of things I wanna get back to
        later
        </Typography>
      </Box>
        <Box>
            {
                posts.filter((post) => post.postTitle.toLocaleLowerCase().includes(keyword)).map((post) => {
                    return(
                        <Box key={post.postId}>
                            <Typography variant="h6" component={Link} to={`/posts/${post.postLink}`}>{post.postTitle}</Typography>
                        </Box>
                    )
                })
            }
        </Box>
    </div>
  );
};

export default Home;
