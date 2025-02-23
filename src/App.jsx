import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./pages/Login.jsx";
import Content from "./pages/Content.jsx";
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/content" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    
  );
}

export default App;
