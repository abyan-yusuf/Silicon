import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Countries from "./Components/Countries";
import Services from "./Components/Services";
import { Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Home />
            <About />
            <Countries />
            <Services />
            <Footer />
          </div>
        }
      />
      <Route
        path="/details"
        element={
          <Read/>
        }
      />
    </Routes>
  );
};

export default App;
