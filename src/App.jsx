import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Countries from "./Components/Countries";
import Services from "./Components/Services";
import { Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    y: 0,
    x: 0,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
  });
  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
  };
  return (
    <>
      <motion.div
        className="h-4 w-4 md:visible invisible bg-[#F27521] rounded-full fixed top-0 left-0 z-[60] pointer-events-none"
        variants={variants}
        animate="default"
      />
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
              <Clients />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/details" element={<Read />} />
      </Routes>
    </>
  );
};

export default App;
