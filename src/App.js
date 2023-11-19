import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import HomePage from "./Pages/HomePages";
import SkillPages from "./Pages/SkillPages";
import AboutPages from "./Pages/AboutPages";
import HobbyPages from "./Pages/HobbyPages";
import ContactPages from "./Pages/ContactPages";

function App() {
  return (
    // <div className="App">
    //   <h1>test</h1>

    // </div>
    <Router>
      <Routes>
        <Route path="react-ellys-app/" element={<HomePage />} />
        <Route path="/About" element={<AboutPages />} />
        <Route path="/Hobby" element={<HobbyPages />} />
        <Route path="/Skill" element={<SkillPages />} />
        <Route path="/Contact" element={<ContactPages />} />
      </Routes>
    </Router>
  );
}

export default App;
