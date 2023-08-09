import { Box, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FormEvent } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

const DEBOUNCE_DELAY = 300; // ms

export default function SearchBar() {
  const [, setSearchParams ] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQueryObject = {
      q: e.target.value
    };
    setSearchParams(searchQueryObject);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Paper
      sx={{
        margin: "8px"
      }}
    >
      <Box sx={{
        margin: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px"
          }}
          >
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
            }}
            >
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        fontSize="inherit"
                        sx={{
                          color: "primary.main",
                        }}
                      />
                    </InputAdornment>
                  ),
                  name: "q",
                }}
                label="Search"
                fullWidth
                inputProps={{
                  maxLength: "22",
                }}
                onChange={debounce(handleChange, DEBOUNCE_DELAY)}
                size='small'
                variant="outlined"
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Paper>
  );
}
