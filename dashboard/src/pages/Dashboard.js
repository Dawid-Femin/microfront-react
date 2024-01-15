import React from 'react';
import {Stack} from "@mui/material";
import Menu from '../components/Menu';
import Dash from '../components/Dash';

const Dashboard = () => {
    return (
        <>
            <Stack direction="row" spacing={4} justifyContent="space-evenly">
                <Menu/>
                <Dash/>
            </Stack>
        </>
    )
}

export default Dashboard;