import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'


// --------imgs
import Logo from './Assets/images/logos.png'
// -----icons

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';





const Navbars = () => {

  const [login, setLogin] = useState(false)
  const[search,setSearch] = useState(false)



  return (
    <>

      <div className="topNav bg-body-tertiary">
        <div className=""><MenuIcon /></div>
        <div className="">
          <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div className="searchbtn" onClick={()=>setSearch(true)}>
          <SearchIcon /><span>Search</span>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="nav-bot">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-4">
              <Nav.Link href="/" className='mx-4'>Home</Nav.Link>
              <Nav.Link href="/blog" className='mx-4'>Blog</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown" className='mx-4'>
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className='mx-4'>About</Nav.Link>
            <Nav.Link href="/contact" className='mx-4'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <div className="end-nav-li">
              <button className='btn btn-primary'>CreateBlog</button>
              <PersonIcon onClick={() => setLogin(!login)} className='icon-nav' />
              <NotificationsIcon className='icon-nav' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {
        login ? <div className="login-box ">

          <div className="signin">
            <h2>Login</h2>
            <div className="form-group">
              <PersonIcon />
              <input type="text" placeholder='Name' />
            </div>
            <div className="form-group">
              <EmailIcon />
              <input type="email" placeholder='Email' />
            </div>
            <div className="form-group">
              <LockIcon />
              <input type="password" placeholder='Password' />
            </div>

            <Link to="">Forgot Password</Link> <br />

            <button className='btn btn-primary mt-3'>Signin</button>
          </div>

        </div> : null
      }

      {
        search ? <div className='searchBg'>
          <div className="searchcloser" >
          <h2 className='closemark' onClick={()=>setSearch(false)}>X</h2>
          <div className="search-inp">
           <div className="inp">
            <div className="input-box">
            <input type="text"  placeholder='search Here...'/>
            <SearchIcon className='search-icon-btn' onClick={()=>setSearch(false)}/>
            </div>
           
           </div>
          </div>
          </div>
        </div>:null
      }
    </>


  )
}

export default Navbars