import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const AboutUs = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" color="primary" gutterBottom>
                About Us
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Company Image"
                            height="200"
                            image="https://source.unsplash.com/random"
                        />
                        <CardContent>
                            <Typography variant="h5" align="center" paragraph>
                                Our Story
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Welcome to Our Company, where we are dedicated to providing
                                high-quality services with a focus on innovation and customer
                                satisfaction. Our journey began with a vision to create a
                                positive impact in the industry and contribute to the success
                                of our clients.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod libero et justo efficitur, vel malesuada tellus
                                sollicitudin. Integer nec lacus sit amet neque bibendum
                                fringilla id eu ligula.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Company Image"
                            height="200"
                            image="https://source.unsplash.com/random"
                        />
                        <CardContent>
                            <Typography variant="h5" align="center" paragraph>
                                Our Story
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Welcome to Our Company, where we are dedicated to providing
                                high-quality services with a focus on innovation and customer
                                satisfaction. Our journey began with a vision to create a
                                positive impact in the industry and contribute to the success
                                of our clients.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod libero et justo efficitur, vel malesuada tellus
                                sollicitudin. Integer nec lacus sit amet neque bibendum
                                fringilla id eu ligula.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
