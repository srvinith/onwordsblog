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
import CameraLife from '../Assets/images/camera-life.png'
import TraditionalFood from '../Assets/images/traditional-food.png'
import EaduRoom from '../Assets/images/eadu-room.png'
import HealthyTrad from '../Assets/images/healthy-life-trad.png'
import MusicTrad from '../Assets/images/music-trad.png'
import John from '../Assets/images/john-follow.svg'
import LearnCss from '../Assets/images/learn-css.png'
import Specs from '../Assets/images/specs.svg'
import Business from '../Assets/images/business.png'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
      <section className='categories'>

        <div className="container">
          <div className="row ">
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
      <section className='latest-life-post'>
        <div className="container">
          <h3>Latest Posts</h3>
          <div className="row">
            <div className="col-md-4">
              <div className='vanlife'>
                <img src={VanLife} alt="VAn life" />
                <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vanlife">
                <img src={TeaEstate} alt="VAn life" />
                <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vanlife">
                <img src={Flower} alt="VAn life" />
                <h5>Why Does Van Life is <br></br>Peaceful While Exploring ?</h5>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="scrolling-animation">
          <div class="position-relative marquee-container d-none d-sm-block ">
            <div class="marquee d-flex justify-content-around letter-animat">
              <div className="d-flex align-items-center "> </div>
              <span><span className='fw-bold'>*</span>Life Style</span>
              <span><span className='fw-bold'>*</span>Food</span>
              <span><span className='fw-bold'>*</span>Travel</span>
              <span><span className='fw-bold'>*</span>Travel</span>
              <span><span className='fw-bold'>*</span>Food</span>
              <span><span className='fw-bold'>*</span>Internet of things</span>
              <span><span className='fw-bold'>*</span>Yoga LIfe</span>
              <span><span className='fw-bold'>*</span>VAn LIfe</span>
              <span><span className='fw-bold'>*</span>TRavel</span>
              <span><span className='fw-bold'>*</span>Food</span>
              <span><span className='fw-bold'>*</span>Life Style</span>
              <span><span className='fw-bold'>*</span>VAn LIfe</span>
              <span><span className='fw-bold'>*</span>Life Style</span>
              <span><span className='fw-bold'>*</span>Life Style</span>

            </div>

          </div>
        </div>
      </section>
      <section className='recent-sec'>
        <div className="container">
          <h3>Recent Posts</h3>
          <div className="row">
            <div className="col-md-6">
              <div className='recent-post'>
                <img src={MobileRead} alt="mobile read" />
                <div className='post-para'>
                  <p>Dulquer Salman . July 3-2023</p>
                </div>
                <h5>Why Does Van Life is<br></br> Peaceful While Exploring ?</h5>
                <p>Read Article</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className='recent-post'>
                <img src={CameraLife} alt="camer life" />
                <div className='post-para'>
                  <p>Dulquer Salman . July 3-2023</p>
                </div>
                <h5>Why Does Van Life is<br></br> Peaceful While Exploring ?</h5>
                <p>Read Article</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='trending-post'>
        <div className="container">
          <div className="row">
            <h2>Trending Posts</h2>
            <div className="col-md-6">
              <div className='traditional-food'>
                <img src={TraditionalFood} alt="Traditioal Food" />
              </div>
            </div>
            <div className="col-md-6">
              <div className='red-article'>
                <h3>South India such a great<br></br> destination to travel is its<br></br> rich and varied cuisine ?</h3>
                <p>While South Indians are not afraid to experiment with their food, it is their old traditions and recipes that make South Indian cuisine such a unique experience</p>
              </div>



              {/* < ArrowRightAltIcon /> */}


            </div>
          </div>
        </div>
      </section>
      <section className='writter-choice-blog'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className='writers'>Writer’s Choice</h3>

              <div className='eaducation'>
                <p className='eaducat'>Education</p>
                <h3>Book lovers with extensive collections dream of
                  having a dedicated home library where ?</h3>
                <p>While South Indians are not afraid to experiment
                  with their food, it is their old traditions and recipes </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={EaduRoom} alt="eaducation room" />
              </div>
            </div>
            <div className="col-md-6">


              <div className='eaducation'>
                <p className='eaducat'>Healthy Life </p>
                <h3>Living a healthier life might seem like a tall order ?</h3>
                <p>the nutrition, the exercise, the inner happiness! But having some friendly advice
                  at your disposal, whenever and wherever you need it, </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={HealthyTrad} alt="healthy" />
              </div>
            </div>
            <div className="col-md-6">


              <div className='eaducation'>
                <p className='eaducat'>Music</p>
                <h3>South India, they all come together in ‘ Panchavadyam ?</h3>
                <p>an ensemble style originating in the state of Kerala on South India’s Malabar
                  Coast. Like many melams, Panchavadayam’s performance </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={MusicTrad} alt="music " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className='make'>Make <span className='great'>Great Podcast</span> And Stay Tuned</h2>
      <section className='latest-podcasts'>
        <div className="container">
          <div className="row">
            <h3>Latest Podcasts</h3>
            <div className="col-md-4">
              <div className='latest-pod'>
                <img src={MusicTrad} alt="" />
                <h3>Why Does Van Life is Peaceful While Exploring ?</h3>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='latest-pod'>
                <img src={MusicTrad} alt="" />
                <h3>Why Does Van Life is Peaceful While Exploring ?</h3>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='latest-pod'>
                <img src={MusicTrad} alt="" />
                <h3>Why Does Van Life is Peaceful While Exploring ?</h3>
                <p>John Wicker . July 3-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='technologies-sec'>
        <div className="container">
          <h2 className='discover'>Discover more of what matters to you</h2>
          <div className='more-topics'>
            <div className=' technology'>
              <p>technology</p>
              <p>Agriculture</p>
              <p>Healthy Lifestyle</p>
              <p>Selfimprovement</p>
              <p>Psychology</p>
              <p>Cryptocurrency</p>
              <p>Money</p>
              <p>Selfimprovement</p>
              <p>Psychology</p>
            </div>
            <p className='see-more'>See more topics</p>
          </div>


        </div>
      </section>
      <section className='follow-sec'>
        <div className="container">
          <h2 className='follow'>Who to follow</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className='follow-blog'>
                <img src={John} alt="john " />
                <div>
                  <span className='john'><h6>John Wicker <span>Follow</span></h6></span>
                  <p className='psychology'>Psychology and writter<br></br>sharing practical advice for</p>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='follow-blog'>
                <img src={John} alt="john " />
                <div>
                  <span className='john'><h6>John Wicker <span>Follow</span></h6></span>
                  <p className='psychology'>Psychology and writter<br></br>sharing practical advice for</p>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='follow-blog'>
                <img src={John} alt="john " />
                <div>
                  <span className='john'><h6>John Wicker <span>Follow</span></h6></span>
                  <p className='psychology'>Psychology and writter<br></br>sharing practical advice for</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='more-learn-sec'>
        <div className="container">
          <div className='recently'>
            <h2>Recently Saved Post</h2>
            <p>View All</p>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className='learn'>
                <img src={LearnCss} alt="learn css" />
                <h6>How to learn css ?</h6>
                {/* <p><img src={Specs} alt="" /><span>12 min</span></p>              */}
              </div>
            </div>
            <div className="col-md-4">
              <div className='learn'>
                <img src={Business} alt="learn css" />
                <h6>How to create a successful business ?</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className='learn'>
                <img src={LearnCss} alt="learn css" />
                <h6>10 Tips to be productive?</h6>
              </div>
            </div>
          </div>
          <div className=" row more-sec">
            <div className="col-md-4">
              <div className='learn'>
                <img src={LearnCss} alt="learn css" />
                <h6>How to learn css ?</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className='learn'>
                <img src={LearnCss} alt="learn css" />
                <h6>How to create a successful business ?</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className='learn'>
                <img src={LearnCss} alt="learn css" />
                <h6>10 Tips to be productive?</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='circle-sec-first'>
                        
        <div className='mail-sec'>
         
          {/* <h2>A monthly post delivered straight to your inbox</h2> */}

        </div>
        {/* <div className='delivered-mail'>

        </div> */}
      </section>

    </>
  )
}

export default Hero