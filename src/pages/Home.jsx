import React from 'react'
import '../Assets/css/home.css'
// import '../Assets/images/robert-roy.png'
import Health from '../Assets/images/health.png'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section className='blog-background '>
        <div className='onwords-home'>
          <h1>ONWORDS BLOG</h1>
          <h3>Discover stories, thinking, and expertise
            <br></br>from writers on any topic.</h3>
          <Link to="#"><button className='blog-btn'>Get Started</button></Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-3">
              <img className='health' src={Health} alt="health" />
            </div>
            <div className="col-md-4"></div>
          </div>

        </div>
      </section>
    </>


  )
}

export default Home