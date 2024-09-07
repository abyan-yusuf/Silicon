import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Countries from "./Components/Countries";
import Services from "./Components/Services";
import { Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";

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
            <Clients />
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
