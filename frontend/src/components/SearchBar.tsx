import { Box, Paper, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { updateSearchingTerm } from "../store";
import { ChangeEvent } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import debounce from 'lodash.debounce'

const DEBOUNCE_DELAY = 300 // ms

export default function SearchBar() {

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchingTerm(e.target.value))
  }

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
      }}>
        <form autoComplete="off">
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px"
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
            }}>
              <TextField
                onChange={debounce(handleChange, DEBOUNCE_DELAY)}
                variant="outlined"
                size='small'
                fullWidth
                inputProps={{
                  maxLength: "22",
                }}
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
                  )
                }}
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Paper>
  )
}
