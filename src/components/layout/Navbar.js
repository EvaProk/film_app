import React from 'react'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

const StyledTypography = styled(Typography)({
  fontSize: '2rem',
  margin: 'auto 0 auto',
})
const StyledNavbar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  padding: '2rem',
})

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledTypography variant="h2">Film Finder</StyledTypography>
    </StyledNavbar>
  )
}

export default Navbar
