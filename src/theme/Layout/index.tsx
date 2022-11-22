import React from 'react';
import Layout from '@theme-original/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const lightTheme = createTheme({
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
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme} >
      {props.children}
    </ThemeProvider>
  )
}
export default function LayoutWrapper(props) {
  return (
    <Layout>
      <MUIThemeWrapper>
        {props.children}
      </MUIThemeWrapper>
    </Layout>
  );
}
