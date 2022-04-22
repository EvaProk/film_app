import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';


export default function FilmCard(props) {
  let imdbID = props.imdbID

const StyledCardMedia = styled(CardMedia)({
  width: "90%",
  margin: "auto",
  height: "60%",
  paddingTop: "2rem"
})
const StyledLink = styled(Link)({
 textDecoration: "none"
})

const StyledCard = styled(Card)({
  maxwidth: "30rem",
  height: "40rem",
  '&:hover': {
    boxShadow: "10px 5px 5px lightgrey"
    
 },

})

  return (
    <StyledCard >
      <StyledCardMedia
        component="img"
        image={props.poster}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Release year: {props.year} 
        </Typography>
      </CardContent>
      <CardActions>
      <StyledLink to={`/film/${imdbID}`} > 
        <Button  variant='outlined' onClick={props.onClick}>More Details</Button>
      </StyledLink>
      </CardActions>
    </StyledCard>
  );
}