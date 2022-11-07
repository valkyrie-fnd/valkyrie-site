import React,{useMemo} from 'react';
import Layout from '@theme-original/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2e8555',
      light: '#33925d',
      dark: '#29784c',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#25c2a0',
      light: '#29d5b0',
      dark: '#21af90',
    },
  },
});
function MUIThemeWrapper(props) {
  const { colorMode } = useColorMode();
  const theme = useMemo(
    () => colorMode === 'dark' ? darkTheme : lightTheme,
    [colorMode]
  );
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
