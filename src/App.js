import "./App.css";
import Main from "./components/Homepage/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context/context";
import FindBooking from "./components/modals/FindBooking";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const { showFindBooking } = useGlobalContext();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full dark:bg-gray-900 font-[karla] grid">
        <BrowserRouter>
          <Navbar />
          <div className="w-full  dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/support" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
