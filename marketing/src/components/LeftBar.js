import React from 'react';
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import {Link} from "react-router-dom";

const LeftBar = () => {
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
                                        <ListItemText primary="Home"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/dashboard'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardCustomizeRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/messenger'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ForumRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Messages"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/groups'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <GroupRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Groups"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/marketplace'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <StoreRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Marketplace"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/profile'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AccountCircleRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Profile"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/settings'>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SettingsSuggestRoundedIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Settings"/>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </nav>
                    <Divider/>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText primary="Spam"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </Box>
        </>
    )
}
export default LeftBar;