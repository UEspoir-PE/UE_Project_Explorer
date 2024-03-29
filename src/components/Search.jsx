import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../utilities/color";
import { useSearchContext } from "./SearchContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: colors.cardBackground,
  "&:hover": {
    backgroundColor: colors.cardBackground,
  },
  marginLeft: 10,
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width for mobile screens
    margin: "0 auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.primary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    border: `1px solid ${colors.primary}`,
    borderRadius: "8px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "30ch",
      },
    },

  
  },
}));

const SearchBar = () => {
  const { searchInput, handleSearchChange } = useSearchContext();

  const handleChange = (e) => {
    handleSearchChange(e.target.value);
  };
  const inputKeyPress = (e) => {
    if (e.key === "Enter") {
      // Handle search on Enter key press if needed
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginY: 2 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Recherche..."
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={handleChange}
          onKeyDown={inputKeyPress}
        />
      </Search>
    </Box>
  );
};

export default SearchBar;
