import React, {useState, useEffect} from "react";
import FilmCard from "./FilmCard";
import Stack from '@mui/material/Stack';
// import axios from "axios" 


import Spinner from "../layout/Spinner.js";;



const FilmList = ({films , loading}) => {
  

  const filmCards = films?.map((film) => <FilmCard title={film["Title"]} poster={film["Poster"]} year={film["Year"]}/>);
 
  if (!films) {
    return <Spinner/>
  } else {
    return <Stack
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    spacing={2}
  > {filmCards}
   </Stack>
  }

};

export default FilmList;
