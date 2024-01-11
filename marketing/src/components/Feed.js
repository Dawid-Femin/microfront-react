import React from 'react';
import {Box} from "@mui/material";
import FeedCard from "./FeedCard";

const Feed = () => {
    return (
        <>
            <Box flex={4} p={2}>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
            </Box>
        </>
    )
}

export default Feed;