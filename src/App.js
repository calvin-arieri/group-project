// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    <p> This is our website </p>
    <Navbar />


    
    <Contact />
    <About />
    </>
  );
}

export default App;
