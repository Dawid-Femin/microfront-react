import React, {useState, useEffect} from 'react';
import {Box} from "@mui/material";
import FeedCard from "./FeedCard";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get('http://localhost:8800/posts');
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllPosts();
    }, []);

    return (
        <Box flex={4} p={2}>
            {posts.map(({id, created_at, title, author, description, image}) =>
                <FeedCard
                    key={id}
                    createdAt={created_at}
                    title={title}
                    des={description}
                    img={image}
                />)}
        </Box>
    )
}

export default Feed;