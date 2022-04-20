import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';


const SearchWrapper =  styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  marginTop: "2rem",
  marginBottom: "2rem"
})

const StyledButton =  styled(Button)({
  width:"15%",
  margin: "auto",
  marginTop: "2rem"
})



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginRight: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    margin: "auto",
    width: '60%',
    height: "3rem"
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));


const SearchBar = ({onChange, value, onClick}) =>  {
    return (
      <SearchWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={value}
              onChange={onChange}
              inputProps={{ 'aria-label': 'search' }}
            />

          </Search>
          <StyledButton variant="contained" onClick={onClick}>Find</StyledButton>

      </SearchWrapper>
    );
}



export default SearchBar;
