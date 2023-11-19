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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<AboutPages />}></Route>
          <Route path="/Hobby" element={<HobbyPages />}></Route>
          <Route path="/Skill" element={<SkillPages />}></Route>
          <Route path="/Contact" element={<ContactPages />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
