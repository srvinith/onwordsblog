import React from 'react'
import '../Assets/css/Hero.css'
import LifeStyle from '../Assets/images/life-style.png'
import Food from '../Assets/images/food.png'
import Travel from '../Assets/images/travel.png'
import Music from '../Assets/images/music.png'
import VanLife from '../Assets/images/van-life.png'
import TeaEstate from '../Assets/images/tea-estate.png'
import Flower from '../Assets/images/flower.png'
import MobileRead from '../Assets/images/mobile-read.png'
const Hero = () => {
  return (
    <>
      <div className="blog-main-page">
        <div className="center-content">
          <p>Discovering Tranquility Through Asanas, Meditation, and Mindfulness Practices"</p>
          <button className="read-article">
            Read Article
          </button>
          <div className="latest-post">
            <p className='feature-post-text'>Featured Post</p>
            <p className='feature-post-date'>Jully 11,2023</p>


          </div>
        </div>
      </div>

      {/* ===================== */}
      <section >

        <div className="container">
          <div className="row">
            <h3>Categories</h3>
            <div className="col-md-3">
              <div className='lifestyle'>
                <img src={LifeStyle} alt="life style" />
                <p>Lifestyle</p>
              </div>
            </div >
            <div className="col-md-3">
              <div className='lifestyle'>
                <img src={Food} alt="food" />
                <p>Food</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className='lifestyle'>
                <img src={Travel} alt="travel" />
                <p>Travel</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className='lifestyle'>
                <img src={Music} alt="Music" />
                <p>Music</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h3>Latest Posts</h3>
            <div className="col-md-4">
              <div>
                <img src={VanLife} alt="VAn life" />
                <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={TeaEstate} alt="VAn life" />
              <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
              <p>John Wicker . July 3-2023</p>
            </div>
            <div className="col-md-4">
              <img src={Flower} alt="VAn life" />
              <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
              <p>John Wicker . July 3-2023</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="scrolling-animation">
          <div class="position-relative marquee-container d-none d-sm-block ">
            <div class="marquee d-flex justify-content-around">
              <span>Life Style</span>
              <span>Travel</span>
              <span>Food</span>
              <span>Internet of things</span>
              <span>Yoga Life</span>
              <span>VAn LIfe</span>
              <span>Life Style</span>
              <span>Travel</span>
              <span>Food</span>
              <span>Internet of things</span>
              <span>Yoga Life</span>
            </div>
            <div class="marquee d-flex justify-content-around">
              <span>Life Style</span>
              <span>Travel</span>
              <span>Food</span>
              <span>Internet of things</span>
              <span>Yoga Life</span>
              <span>VAn LIfe</span>
              <span>Life Style</span>
              <span>Travel</span>
              <span>Food</span>
              <span>Internet of things</span>
              <span>Yoga Life</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="com-md-6">
              <div>
                <img src={MobileRead} alt="mobile read" />
              </div>
            </div>
            <div className="com-md-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero