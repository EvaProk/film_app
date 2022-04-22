import React from "react";
// import { Link } from "react-router-dom";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


// import PropTypes from 'prop-types'
const StyledTypography = styled(Typography)({
  fontSize: "2rem",
  margin: "auto 0 auto"
})
const StyledNavbar = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "2rem",

})

const StyledIcon = styled(LiveTvOutlinedIcon)({
  padding: "2rem",

})



const Navbar = ()=> {

    return (
      <StyledNavbar >
        {/* <Link to="/"> */}
        {/* <StyledIcon /> */}

        <StyledTypography variant="h2">
          Film Finder
        </StyledTypography>
        
      </StyledNavbar>
    );
}

export default Navbar;
