import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen w-screen  dark:bg-gray-900">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
