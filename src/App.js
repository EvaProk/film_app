import './App.css';
import React, {useState, useEffect} from 'react'
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmDetails from "./components/films/FilmDetails";
import axios from "axios" 

function App() {

//   const [loading, setLoading] = useState(false)

//   const[filmDetails, setFilmDetails] = useState({})


// //   // Get a selected Film
// const getFilm = (imdbID) => {
//   setLoading(true);
//   axios
//     .get(
//       `http://www.omdbapi.com/?i=${imdbID}&apikey=6f39550d`
//     )
//     .then((res) => {
//      console.log(res.data)
//      setFilmDetails(res.data)
//      setLoading(false);

//     });
// };





  return (
    <Router>
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home />}/>  
      {/* <Route exact path='/film/:imdbID' element={<FilmDetails getFilm={getFilm} filmDetails={filmDetails}/>}/>     */}
     </Routes>
    </div>
    </Router>
  );
}

export default App;
