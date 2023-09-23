import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NavBar from '../components/UI/nav-bar/NavBar';

export default function ActionAreaCard() {
  const experience = [
    {
      employer: "Enovam",
      url: "https://enovam.com/",
      rol: "Full Stack Developer",
      since: "09/2022",
      to: "today",
      description: "Full Stack Developer React Nest",
      image: "data:image/jpeg;base64,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"
    }
  ]
  return (
    <>
      <NavBar />
      <div className='py-5 px-5'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <a style={{color: "black", textDecoration: "none"}} href={experience[0].url} target='_blank' rel="noreferrer">
              <CardMedia
                component="img"
                height="140"
                image={experience[0].image}
                alt={experience[0].employer}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {experience[0].employer}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {experience[0].rol}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience[0].description}
                </Typography>
            </CardContent>
            </a>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}