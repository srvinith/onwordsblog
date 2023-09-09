
import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog"
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPwd from './pages/ForgotPwd';
import Profile from './pages/Profile';
import ProfileForm from "./pages/ProfileForm";
import CreateBlog from "./pages/CreateBlog";
import BlogStore from "./pages/BlogStore";
import VerifyOtp from "./pages/VerifyOtp";
import Comment from "./pages/Comment";



function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/logins" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPwd />} />
        <Route path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profileform" element={<ProfileForm />}/>
        <Route path="/createBlog" element={<CreateBlog />}/>
        <Route path="/blogstore" element={<BlogStore />}/>
        <Route path="/verfiyotp" element={<VerifyOtp/>}/>
        <Route path="/comment" element={<Comment />}/>
    
        

    

      </Routes>

    </div>
  );
}

export default App;
