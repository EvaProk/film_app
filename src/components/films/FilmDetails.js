import  React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { useParams } from 'react-router-dom'


export default function FilmDetails({ getFilm, filmDetails}) {

  // const params = useParams()
  // console.log(params)

  // const {
  //   Poster,
  //   Title,
  //   Genre,
  //   Actors,
  //   Director,
  //   Year,
  //   Plot
  // } = filmDetails

  // useEffect(()=>{
  //   getFilm(params.imdbID)
  // },[])



//   const [film, setFilm] =useState({
//     "Title": "Harry Potter 20th Anniversary: Return to Hogwarts",
//     "Year": "2022",
//     "Rated": "TV-PG",
//     "Released": "01 Jan 2022",
//     "Runtime": "102 min",
//     "Genre": "Documentary, Family",
//     "Director": "Casey Patterson, Joe Pearlman, Eran Creevy",
//     "Writer": "N/A",
//     "Actors": "Gary Oldman, Daniel Radcliffe, Emma Watson",
//     "Plot": "Cast members from all \"Harry Potter\" films reunite in a retrospective special to celebrate the anniversary of the first film, including interviews and cast conversations.",
//     "Language": "English",
//     "Country": "United Kingdom, United States",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "8.0/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "93%"
//         }
//     ],
//     "Metascore": "N/A",
//     "imdbRating": "8.0",
//     "imdbVotes": "36,024",
//     "imdbID": "tt16116174",
//     "Type": "movie",
//     "DVD": "01 Jan 2022",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// })




  // return (
  //   <Card sx={{ display: 'flex', width: "85%" , margin: "auto"}}>
  //     <CardMedia
  //       component="img"
  //       sx={{ width: "300px", height: "400px" }}
  //       image={Poster}
  //       alt={Title}
  //     />
  //     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  //       <CardContent sx={{ flex: '1 0 auto' }}>
  //         <Typography component="div" variant="h5">
  //         {Title}
  //         </Typography>
  //         <Typography variant="subtitle1" component="div">
  //          <b>Genre: </b> {Genre} 
  //          <br/> 
  //          <b>Actors:</b> {Actors}
  //          <br/> 
  //          <b>Director:</b> {Director}
  //          <br/>
  //          <b> Year:</b> {Year}
  //         </Typography>
  //         <Typography variant="subtitle1" color="text.secondary" component="div">
  //         {Plot}
  //         </Typography>
  //       </CardContent>
  //     </Box> 
  //   </Card>
  // );
}