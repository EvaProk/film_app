import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";



export default function FilmCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image={props.poster}
        alt={props.title}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Release year: {props.year} 
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Link to="" >  */}
        <Button size="small">More Details</Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}