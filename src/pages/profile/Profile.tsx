import React, { useState } from "react";
import { Navigation } from "../../components/navigation/Navigation";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Grid, Avatar, List, ListItem, ListItemText } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Photo from "../../assets/images/Photo.png";
import "./Profile.css";

export const Profile: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Navigation />
      <div className="profileHeader" style={{ padding: '60px 0 0 0'}}>
        <Typography variant="h3" sx={{ textAlign: 'center', color:'white', marginBottom:'20px' }}>About me</Typography>
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'center', color:'white', marginBottom:'10px' }}>A quick glance for what you need to know about me</Typography>
      </div>
      <Container id="About" sx={{ padding: "60px 0" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar alt="Ajmal" src={Photo} sx={{ width: "90%", height: "auto" }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleExpandChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Let me introduce myself</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Hello there .. My name is Ajmal Op. A talented and self-motivated Software student from INDIA. I completed my primary education from Kerala and completed secondary education in Biology Science from CHMHSS pookolathur.
                  After completing secondary education, I also completed a diploma in computer engineering from SSM Polytechnic college Tirur with a first-class result. I have also done a project that shows my skills in front-end development.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleExpandChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Check out my skills</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem sx={{backgroundColor:'#00000005', borderRadius:'12px', marginBottom:'5px'}}><ListItemText primary="#Problem Solving" secondary="Mathematical and logical knowledge to solve problems" /></ListItem>
                  <ListItem sx={{backgroundColor:'#00000005', borderRadius:'12px', marginBottom:'5px'}}><ListItemText primary="#Critical Thinking" secondary="Ability to effectively analyze information and form a judgment" /></ListItem>
                  <ListItem sx={{backgroundColor:'#00000005', borderRadius:'12px', marginBottom:'5px'}}><ListItemText primary="#Time Management" secondary="Ability to respond and analyze fastest and simplest answer" /></ListItem>
                  <ListItem sx={{backgroundColor:'#00000005', borderRadius:'12px', marginBottom:'5px'}}><ListItemText primary="#Communication" secondary="Local tongue conversational English and basic Hindi" /></ListItem>
                  <ListItem sx={{backgroundColor:'#00000005', borderRadius:'12px', marginBottom:'5px'}}><ListItemText primary="#Flexibility" secondary="Ability to find a solution in any circumstance" /></ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleExpandChange('panel3')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Get my personal info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem><ListItemText primary="Name" secondary="Ajmal Op" /></ListItem>
                  <ListItem><ListItemText primary="DOB" secondary="31/10/2002" /></ListItem>
                  <ListItem><ListItemText primary="Place" secondary="Manjeri Malappuram Kerala India" /></ListItem>
                  <ListItem><ListItemText primary="Address" secondary="Trippanachi Malappuram Kerala India" /></ListItem>
                  <ListItem><ListItemText primary="Email" secondary="amalajmal52@gmail.com" /></ListItem>
                  <ListItem><ListItemText primary="Phone" secondary="9961255819" /></ListItem>
                  <ListItem><ListItemText primary="Freelance" secondary="Available" /></ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleExpandChange('panel4')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>I have learned</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <BrickItem text="HTML" />
                  <BrickItem text="CSS" />
                  <BrickItem text="Javascript" />
                  <BrickItem text="Typescript" />
                  <BrickItem text="Bootstrap" />
                  <BrickItem text="Material UI" />
                  <BrickItem text="React-Js" />
                  <BrickItem text="React-vite" />
                  <BrickItem text="Redux-toolkit" />
                  <BrickItem text="Javascript" />
                  <BrickItem text="C#" />
                  <BrickItem text="Dot-Net Core" />
                  <BrickItem text="ADO Dot-Net" />
                  <BrickItem text="Entity Framework" />
                  <BrickItem text="Dapper" />
                  <BrickItem text="SQL-Server" />
                  <BrickItem text="MySQL" />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleExpandChange('panel5')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Why hire me</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display:'flex', flexWrap:'wrap'}}>
                  <BrickItem text="I should be hired becouse of my relevent skills, experiens, and passion for the industry. i've reached this far and can add value to the growth of the company." />
                  <BrickItem text="My positive attitude, work ethics, and long-term goals align with the job requirements, making me a committed and valuable asset to the company" />
                </div>
              </AccordionDetails>
            </Accordion>        
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const BrickItem: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      backgroundColor: "#f5f5f5",
      padding: "8px",
      margin: "4px",
      borderRadius: "4px",
    }}
  >
    <Typography>{text}</Typography>
  </div>
);

export default Profile;
