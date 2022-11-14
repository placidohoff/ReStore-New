import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalog from "./components/catalog/Catalog";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "./components/Errors/ServerError";


function App() {
  // const history = useHistory();
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar />
          <CssBaseline />
          {/* ^^Removes the default padding and margins */}
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            {/* <Catalog /> */}
            <Route path='/' exact component={HomePage} />
            <Route path='/catalog' exact component={Catalog} />
            <Route path='/catalog/:id' component={ProductDetails} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/server-error' component={ServerError} />
          </Container>
      </ThemeProvider>

    </>
  );
}

export default App;
