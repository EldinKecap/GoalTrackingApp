import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'red', // Replace 'red' with your desired color
          },
          '&:hover fieldset': {
            borderColor: 'blue', // Replace 'blue' with your desired hover color
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green', // Replace 'green' with your desired focused color
          },
        },
      },
    },
  },
});

// Your component
const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label="Outlined"
        variant="outlined"
        // Other props
      />
    </ThemeProvider>
  );
};

export default MyComponent;