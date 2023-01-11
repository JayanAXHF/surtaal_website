import "./App.css";
import Main from "./components/Homepage/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { light, dark } from "./Theme";
import Tos from "./components/policies/Tos";
import Privacy from "./components/policies/Privacy";

const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const CustomButton = styled(ButtonUnstyled)(
  //eslint-disable-next-line
  ({ theme }) => `
font-family: IBM Plex Sans, sans-serif;
font-weight: bold;
font-size: 0.875rem;
background-color: ${blue[500]};
padding: 12px 24px;
border-radius: 12px;
color: white;
transition: all 150ms ease;
cursor: pointer;
border: none;


&:hover {
  background-color: ${blue[600]};
}

&.${buttonUnstyledClasses.active} {
  background-color: ${blue[700]};
}

&.${buttonUnstyledClasses.focusVisible} {
 
  outline: none;
}

&.${buttonUnstyledClasses.disabled} {
  opacity: 0.5;
  cursor: not-allowed;
}
`
);
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeVar = prefersDarkMode ? dark : light;
  // eslint-disable-next-line
  const theme = React.useMemo(() => createTheme(themeVar), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <div className=" font-[karla] grid ">
        <BrowserRouter>
          <Navbar />
          <div className="">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/support" element={<ContactUs />} />
              <Route path="/support/tos" element={<Tos />} />
              <Route path="/support/privacy" element={<Privacy />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
export { CustomButton };
