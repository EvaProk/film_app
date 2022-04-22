import React from "react";
import FilmCard from "./FilmCard";
import Grid from '@mui/material/Grid';
import Spinner from "../layout/Spinner.js";
import { styled } from '@mui/system';


const StyledGrid = styled(Grid)({
  padding: "2rem"
})

const FilmList = ({films , loading, onClick}) => {
  
  const filmCards = films?.map((film) => <Grid item xs={12} sm={6} md={3} xl={2}> <FilmCard title={film.Title} poster={film.Poster} year={film.Year} imdbID={film.imdbID} onClick={onClick}/></Grid>);
 
  if (loading) {
    return <Spinner/>
  } else {
    return  <StyledGrid container rowSpacing={5} spacing={4}>
       {filmCards}
        </StyledGrid>
  }

};

export default FilmList;
