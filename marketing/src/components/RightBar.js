import React from 'react';
import {AvatarGroup, Avatar, Box} from "@mui/material";
// import Avatar from "@mui/material/Avatar";

const RightBar = () => {
    return (
        <>
            <Box flex={2} p={2} sx={{display: {xs: 'none', lg: 'block'}}}>
                <Box position='sticky' top='100px'>
                    <p style={{textAlign: 'center'}}>Online TeamMates</p>
                    <AvatarGroup max={6} sx={{justifyContent: 'center'}}>
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random?wallpapers"/>
                        <Avatar alt="Travis Howard"
                                src="https://img.freepik.com/darmowe-zdjecie/ogolny-widok-dloni-mezczyzny-gospodarstwa-paleczki-nad-pyszne-tajskie-jedzenie_23-2148093085.jpg?w=1380&t=st=1705057275~exp=1705057875~hmac=2e0f179abe242f007d638d94eeb33809297b091f26875516bd83b407e38112b7"/>
                        <Avatar alt="Cindy Baker"
                                src="https://img.freepik.com/darmowe-zdjecie/tapeta-na-czerwonym-tle-abstrakcyjna-tekstura-farby-z-mieszanymi-kolorami_53876-133257.jpg?w=1380&t=st=1705057314~exp=1705057914~hmac=29c4a68a147cd64d6f780568044a74f94fcc67e2879b0b247ca7b8db773b3cf1"/>
                        <Avatar alt="Agnes Walker"
                                src="https://img.freepik.com/darmowe-zdjecie/mlody-czlowiek-bez-spodni-ale-w-kurtce-pracujacy-na-komputerze-laptopie_155003-8678.jpg?w=1380&t=st=1705057394~exp=1705057994~hmac=df123680e30596728da7f66039d2ef956e84bbeec05e3ec9cb6f93737f2e65eb"/>
                        <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random?wallpapers"/>
                        <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random?wallpapers"/>
                        <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random?wallpapers"/>
                        <Avatar alt="Trevor Henderson" src="https://source.unsplash.com/random?wallpapers"/>
                    </AvatarGroup>
                </Box>
            </Box>
        </>
    )
}

export default RightBar;