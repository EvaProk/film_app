import React,{ useState, useEffect } from 'react'
import Navbar from "../layout/Navbar";
import AlertMessage from "./../layout/Alert";
import SearchBar from "../films/SearchBar";
import FilmList from "../films/FilmList";
import FilmDetails from "../films/FilmDetails";
import background from "../pages/background.jpg"
import axios from "axios" 
import { styled } from '@mui/system';


const StyledHome = styled('div')(({ theme }) => ({
  fontSize: "0.6rem",
  background: `url(${background})`,
  objectFit: "cover",
  paddingBottom: "2rem",
  height: "30rem",
  backgroundSize: "cover",
  [theme.breakpoints.up('md')]: {
    height: "35rem",
  },
}));

function Home() {
  const [loading, setLoading] = useState(false)
  const [films, setFilms] = useState([])
  const [value, setValue] = useState("")
  const [alert, setAlert] = useState("")


const handleChange = (event) =>{
  setValue(event.target.value)
}
 
 //Search films 
const searchFilms = () => {
  setLoading(true)
  
  axios
    .get(
      `http://www.omdbapi.com/?s=${value.trim()}&apikey=6f39550d`
    )
    .then((res) => {

      if(res.data.Error){
        setFilms([])
        setAlert(res.data.Error);  
        setLoading(false)
      }
      setFilms(res.data.Search)  
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
    })
};

 //Clear Search results
  const onClear = () => setFilms([])
 
  return (
    <> 
    <StyledHome >
      <Navbar/>
      { alert? <AlertMessage message={alert}/> : null}
      <SearchBar value={value} onChange={handleChange} onClick={searchFilms} films={films} onClear={onClear} alert={alert}/>
      {/* <FilmList films={films} loading={loading} /> */}
      {/* <FilmDetails/> */}  
    </StyledHome>
    <FilmList films={films} loading={loading} />
   </>
  );
}

export default Home;
