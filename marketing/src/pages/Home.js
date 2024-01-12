import React from 'react';
import {Stack} from "@mui/material";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";

const Home = () => {
    return (
        <>
            <Stack direction="row" spacing={4} justifyContent="space-evenly">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </Stack>
        </>
    )
}
export default Home;