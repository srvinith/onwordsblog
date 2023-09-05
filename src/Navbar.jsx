import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'


// --------imgs---------//
import Logo from './Assets/images/logos.png'
// -----icons

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Navbars = () => {

 
  const [search, setSearch] = useState(false)
  

  return (
    <>
      <div className="nav-sticky">
        <div className="topNav bg-body-tertiary">
          <div className=""><MenuIcon /></div>
          <div className="">
            <img src={Logo} alt="Logo" className='logo' />
          </div>
          <div className="searchbtn" onClick={() => setSearch(true)}>
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
                <NavDropdown title="Categories" id="collasible-nav-dropdown" className='collapse-nav'>
                  <NavDropdown.Item href="">Food</NavDropdown.Item>
                  <NavDropdown.Item href="">
                    Entertainment
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">Data Science</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about" className='mx-4'>About</Nav.Link>
                <Nav.Link href="/contact" className='mx-4'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <div className="end-nav-li">
                <Link to="/logins">
                <PersonIcon className='icon-nav' />
                </Link>
                
                <NotificationsIcon className='icon-nav' />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {
        search ? <div className='searchBg'>
          <div className="searchcloser" >
            <h2 className='closemark' onClick={() => setSearch(false)}>X</h2>
            <div className="search-inp">
              <div className="inp">
                <div className="input-box">
                  <input type="text" placeholder='search Here...' />
                  <SearchIcon className='search-icon-btn' onClick={() => setSearch(false)} />
                </div>

              </div>
            </div>
          </div>
        </div> : null
      }


     
    </>


  )
}

export default Navbars