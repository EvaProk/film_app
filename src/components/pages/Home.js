import React,{ useState, useEffect } from 'react'
import Navbar from "../layout/Navbar";
import SearchBar from "../films/SearchBar";
import FilmList from "../films/FilmList";
import axios from "axios" 


import { styled } from '@mui/system';


const StyledHome = styled('div')({
  fontSize: "0.8rem",
  padding: "2rem",
  width: "100%",
})


function Home() {
  const [loading, setLoading] = useState(false)
  const [films, setFilms] = useState([])
  const [value, setValue] = useState("")


const handleChange = (event) =>{
  setValue(event.target.value)
}
 
 //Search films 
const searchFilms = () => {
  setLoading()
  axios
    .get(
      `http://www.omdbapi.com/?s=${value}&apikey=6f39550d`
    )
    .then((res) => {
      console.log(res)
      setFilms(res.data.Search)       
    });
};


  return (
    <StyledHome >
      <Navbar/>
      <SearchBar value={value} onChange={handleChange} onClick={searchFilms}/>
      <FilmList films={films} loading={loading}/>
         
    </StyledHome>
  );
}

export default Home;
