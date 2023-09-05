
import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog"
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPwd from './pages/ForgotPwd';
import Profile from './pages/Profile';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/logins" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPwd />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />}/>
    

      </Routes>

    </div>
  );
}

export default App;
