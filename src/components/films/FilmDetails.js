import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Spinner from '../layout/Spinner.js'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const StyledFilmDetails = styled('div')({
  margin: '5rem',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  padding: '3rem',
})

const StyledCard = styled(Card)(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    display: 'flex',
    width: '90%',
  },
}))

const StyledLink = styled(Link)({
  textDecoration: 'none',
  margin: '1rem 0 1rem',
})

export default function FilmDetails({ getFilm, filmDetails, loading }) {
  const params = useParams()

  useEffect(() => {
    getFilm(params.imdbID)
  }, [])

  const { Poster, Title, Genre, Actors, Director, Year, Plot } = filmDetails

  if (loading) return <Spinner />

  return (
    <StyledFilmDetails>
      <StyledLink to="/">
        <Button variant="outlined"> Back to search </Button>
      </StyledLink>
      <StyledCard>
        <CardMedia
          component="img"
          sx={{ width: '300px', height: '400px' }}
          image={Poster}
          alt={Title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {Title}
            </Typography>
            <Typography variant="subtitle1" component="div">
              <b>Genre: </b> {Genre}
              <br />
              <b>Actors:</b> {Actors}
              <br />
              <b>Director:</b> {Director}
              <br />
              <b> Year:</b> {Year}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {Plot}
            </Typography>
          </CardContent>
        </Box>
      </StyledCard>
    </StyledFilmDetails>
  )
}
