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
  },
});

function MUIThemeWrapper(props) {
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme}>
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
