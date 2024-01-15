import React from 'react';
import {Stack} from "@mui/material";
import Menu from '../components/Menu';
import PostsTable from '../components/PostsTable';

const Posts = () => {
    return (
        <>
            <Stack direction="row" spacing={4} justifyContent="space-evenly">
                <Menu/>
                <PostsTable/>
            </Stack>
        </>
    )
}

export default Posts;