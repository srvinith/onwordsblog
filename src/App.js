
import React from "react";
import Navbar from "./Navbar";
import {Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {

  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/about" element ={<About />}/>
      <Route path ="/contact" element ={<Contact />}/>
     </Routes>

    </div>
  );
}

export default App;
