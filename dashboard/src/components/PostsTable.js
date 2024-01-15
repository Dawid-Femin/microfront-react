import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";
import axios from 'axios';

export default function PostsTable() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const res = await axios.get('http://dawidfemin.atthost24.pl/posts');
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllPosts();
    }, []);

    return (
        <Box>
            <TableContainer component={Paper} flex={10} p={2} sx={{display: {xs: 'none', md: 'block'}}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Author</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map(({id, created_at, title, author, description, image}) => (
                            <TableRow
                                key={id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">{created_at}</TableCell>
                                <TableCell align="left">{title}</TableCell>
                                <TableCell align="left">{author}</TableCell>
                                <TableCell align="left">{title}</TableCell>
                                <TableCell align="left">{title}</TableCell>
                                <TableCell align="left">E D</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}