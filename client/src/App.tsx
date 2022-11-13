import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/Header/Header";
import { Product } from "./models/product";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light' 
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* ^^Removes the default padding and margins */}
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>

    </>
  );
}

export default App;
