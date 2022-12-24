import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Homepage/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import { useGlobalContext } from "./context/context";
import FindBooking from "./components/modals/FindBooking";

function App() {
  const { showFindBooking } = useGlobalContext();

  return (
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
  );
}

export default App;
