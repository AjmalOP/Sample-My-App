import React from "react"
import './Home.css'
import { Navigation } from "../../components/navigation/Navigation"
import { Avatar, Button, Container, Grid, Tooltip, Typography } from "@mui/material"
import photo from '../../assets/images/Photo.png'

export const Home : React.FC = () => {
    return (
        <>
        <Navigation />
        <div className="HomeContainer">
            <Container id="intro" sx={{ padding: "60px 0" }}>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left'}, marginTop: { xs: '20px', md: '20px'} }}>
                    <Typography variant="h2" sx={{paddingBottom: '20px'}}>AJMAL OP</Typography>
                    <Typography variant="h4" sx={{paddingBottom: '10px'}}>Full-stack Software Engineer</Typography>
                    <Typography variant="body1" paragraph sx={{paddingBottom: '20px'}}>
                    Working as a student for 4 years in IT field<br />
                    Ambitious and communicative. Fast learner & self motivated.
                    </Typography>
                    <Button variant="contained" color="secondary" href="#">Hire me</Button>
                    <Button variant="contained" color="secondary" href="#" sx={{marginLeft: '20px'}}>TALk TO</Button>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: { xs: '50px', md: '50px'} }}>
                    <Tooltip title="myPhoto" placement="bottom">
                    <Avatar 
                        alt="Ajmal" 
                        src={ photo }
                        sx={{ width: { xs: 200, md: 400 }, height: { xs: 200, md: 400 }, backgroundColor: "rgb(212, 212, 212)" }} 
                    />
                    </Tooltip>
                </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}