import React from 'react'
import '../Assets/css/home.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import blogBgOne from '../Assets/images/blog-bg-1.jpg'
import blogBgTwo from '../Assets/images/blog-bg-2.jpg'
import blogBgThree from '../Assets/images/blog-bg-3.jpg'


const Home = () => {
  return (
    <>
      <section className='blogHome'>
        {/* -----------carousel slider start------- */}


       <div className="carousel-slid">
       <Carousel>
          <Carousel.Item>
            <img src={blogBgOne} alt="blog background" className='blog-bg' />
          </Carousel.Item>
          <Carousel.Item>

            <img src={blogBgTwo} alt="blog background" className='blog-bg' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={blogBgThree} alt="blog background" className='blog-bg' />
          </Carousel.Item>
        </Carousel>
       </div>



        {/* -----------carousel slider end------- */}

        <div className="center-cont-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className='center-tex'>
                Publish your passions, your way <br />
                Create a unique and beautiful blog easily.
              </h2>

              <Link to="#"><button className='btn btn-primary'>CreateBlog</button></Link>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-3">
              <img className='health' src="" alt="health" />
            </div>
            <div className="col-md-4"></div>
          </div>

        </div>
      </section>
    </>


  )
}

export default Home