import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, HashRouter as Router,Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/service" element={<Service/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
