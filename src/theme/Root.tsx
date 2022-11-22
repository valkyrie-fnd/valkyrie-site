import React from 'react';
import Root from '@theme-original/Root'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#4DDD89',
    },
    secondary: {
      main: '#9AFFC4',
    },
    text: {
      primary: '#ffffff',
      secondary: '#868280'
    },
    background: {
      default: '#19191D',
    },
  },
  typography: {
    fontFamily: 'Rajdhani, sans-serif',
  },
  components: {
    // Customize Textfield component
    MuiTextField: {
      defaultProps: {
        sx: {
          "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: 'var(--ifm-color-primary)'
          },
          "&:hover .MuiFormLabel-root": {
            color: "var(--ifm-color-primary)"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--border-color)"
          }
        }
      },
    }
  }
});

function MUIThemeWrapper(props) {
  return (
    <ThemeProvider theme={theme} >
      {props.children}
    </ThemeProvider>
  )
}

export default function RootWrapper(props) {
  return (<Root>
    <MUIThemeWrapper>
      {props.children}
    </MUIThemeWrapper>
  </Root>)
}