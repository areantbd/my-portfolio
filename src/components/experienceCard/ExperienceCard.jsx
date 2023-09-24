import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ExperienceCard({ image, employer, url, since, to, rol, description}) {
  return (
    <div>
      <Card sx={{ width: 400, boxShadow: 13 }}>
          <CardActionArea>
            <a style={{color: "black", textDecoration: "none"}} href={url} target='_blank' rel="noreferrer">
              <CardMedia
                component="img"
                height="280"
                image={image}
                alt={employer}
              />
              <CardContent>
                <div className='row align-items-center'>
                  <Typography gutterBottom variant="h4" component="div" className='col-12 col-md-6'>
                    {employer}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div" className='col-12 col-md-6'>
                    {since} to {to}
                  </Typography>
                </div>
                <div  className='d-flex'>
                  <Typography gutterBottom variant="h6" component="div" className='ms-auto text-decoration-underline'>
                    {rol}
                  </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
            </CardContent>
            </a>
          </CardActionArea>
        </Card>
    </div>
  )
}

export default ExperienceCard