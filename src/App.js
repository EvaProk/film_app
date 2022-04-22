import './App.css'
import React, { useState } from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FilmDetails from './components/films/FilmDetails'
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(false)
  const [filmDetails, setFilmDetails] = useState({})
  const [films, setFilms] = useState([])
  const [value, setValue] = useState('')
  const [alert, setAlert] = useState('')

  const filmKey = process.env.REACT_APP_SECRET

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  //Search films
  const searchFilms = () => {
    setLoading(true)

    axios
      .get(`http://www.omdbapi.com/?s=${value.trim()}&apikey=${filmKey}`)
      .then((res) => {
        if (res.data.Error) {
          setFilms([])
          setAlert(res.data.Error)
          setFilms([])
          setValue('')
          setLoading(false)
        }
        setFilms(res.data.Search)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //Clear Search results
  const onClear = () => {
    setFilms([])
    setValue('')
  }

  // Get a selected Film
  const getFilm = (imdbID) => {
    setLoading(true)
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${filmKey}`)
      .then((res) => {
        setFilmDetails(res.data)
        setLoading(false)
      })
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                onClear={onClear}
                searchFilms={searchFilms}
                handleChange={handleChange}
                films={films}
                loading={loading}
                value={value}
                alert={alert}
              />
            }
          />
          <Route
            exact
            path="/film/:imdbID"
            element={
              <FilmDetails
                getFilm={getFilm}
                filmDetails={filmDetails}
                loading={loading}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
