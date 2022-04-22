import React from 'react'
import Navbar from '../layout/Navbar'
import AlertMessage from './../layout/Alert'
import SearchBar from '../films/SearchBar'
import FilmList from '../films/FilmList'
import background from '../pages/background.jpg'
import { styled } from '@mui/system'

const StyledHome = styled('div')(({ theme }) => ({
  fontSize: '0.6rem',
  background: `url(${background})`,
  objectFit: 'cover',
  paddingBottom: '2rem',
  height: '30rem',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    height: '35rem',
  },
}))

function Home({
  handleChange,
  searchFilms,
  films,
  onClear,
  alert,
  loading,
  value,
}) {
  return (
    <>
      <StyledHome>
        <Navbar />
        <SearchBar
          value={value}
          onChange={handleChange}
          onClick={searchFilms}
          films={films}
          onClear={onClear}
          alert={alert}
        />
        {alert ? <AlertMessage message={alert} /> : null}
      </StyledHome>
      <FilmList films={films} loading={loading} />
    </>
  )
}

export default Home
