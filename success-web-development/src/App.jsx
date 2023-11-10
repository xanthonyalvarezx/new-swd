import "./App.css";
import { Route, Routes } from "react-router-dom";

import Landing from "./components/pages/Landing";
import WhatWeDo from "./components/pages/WhatWeDo";
import OurProjects from "./components/pages/OurProjects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/what-we-do" element={<WhatWeDo />} />
          <Route exact path="/projects" element={<OurProjects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
