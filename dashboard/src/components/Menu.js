import React from 'react';
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import List from '@mui/material/List';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Box flex={2} p={2} sx={{display: {xs: 'none', md: 'block'}}}>
                <Box position='sticky' top='80px'>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <Link to='/'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Homepage"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/dashboard'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardCustomizeRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="General"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/dashboard/posts'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardCustomizeRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Posts"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </nav>
                </Box>
            </Box>
        </>
    )
}

export default Menu;