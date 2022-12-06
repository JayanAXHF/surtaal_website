import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Homepage/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="w-full dark:bg-gray-900 font-[karla]">
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
