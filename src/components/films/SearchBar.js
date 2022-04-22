import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';


const SearchWrapper =  styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  marginTop: "6rem",
  marginBottom: "2rem"
})

const StyledButton =  styled(Button)(({ theme }) => ({
    width:"50%",
    margin: "auto",
    marginTop: "2rem",
  
  [theme.breakpoints.up('sm')]: {
    width:"30%",
    margin: "auto",
    marginTop: "2rem"
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginRight: theme.spacing(2),
  margin: "auto",
    width: '80%',
    height: "3rem",
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


const SearchBar = ({onChange, value, onClick, films, onClear}) =>  {
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
          {films?.length > 0 && (
          <StyledButton variant="outlined" onClick={onClear}>Clear Search</StyledButton>
          )}
      </SearchWrapper>
    );
}



export default SearchBar;
