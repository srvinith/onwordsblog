import React, { useState } from 'react'
import '../Assets/css/home.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============icons====================
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Carousel from 'react-bootstrap/Carousel';
import blogBgOne from '../Assets/images/blog-bg-1.jpg'
import blogBgTwo from '../Assets/images/blog-bg-2.jpg'
// import blogBgThree from '../Assets/images/blog-bg-3.jpg'
import Health from '../Assets/images/health.png'


const Home = () => {

  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const notify = () => toast("bookmarked successfully!");

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
              <img src={blogBgTwo} alt="blog background" className='blog-bg' />
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
      <div className="dummy-container"></div>
      <div className="main-home-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ============= ui only add this thumbline copy for ui struc=================== */}

              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='thumbline-page'>
                <div className="blog-details">
                  <div className="thumbline-above">
                    <div className="f-above-sec">
                      <div className="post-cre-details">
                        <div className="user-img">
                          <AccountCircleIcon />
                        </div>
                        <div className="user-name">
                          <span>Anirudh Munipalli</span>
                          <small>sep-3</small>
                        </div>
                      </div>
                      <h6>
                        STOP using simple console.log in JavaScript. Try this instead
                      </h6>
                      <p>Debugging. Something that programmers try hard to avoid, only to make more bugs in code. Coding without bugs is something even the... </p>
                    </div>
                    <div className="s-above-sec">
                      <div className="post-img">
                        <img src={Health} alt="post-img" />
                      </div>

                    </div>
                  </div>
                  <div className="thumbline-below">
                    <div className="f-below-thumbline">
                      <div className="our-related-topic">
                        <p>JavaScript</p>
                      </div>
                      <div className="read-min">
                        <small>4 min read</small>
                      </div>
                    </div>
                    <div className="markable-icons">
                      <div className="bookmark">
                        <div className="unbookmark" onClick={toggleBookmark}>
                          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                          <ToastContainer />
                        </div>
                      </div>
                      <div className="more-btn">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='dropdown' href="#">Mute this author</Dropdown.Item>
                            <Dropdown.Item className='dropdown' href="#">Report</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============= ui only add this thumbline copy for ui struc=================== */}
            </div>
            <div className="col-md-4">
              <div className="side-section-home">
                <div className="">
                  <div className="Recommended-topics">
                    <h5>Recommended topics</h5>

                    <div className="recomment">
                    <p>Programming</p>
                    <p>Data Science</p>
                    <p>Self Improvement</p>
                    <p>Writing</p>
                    <p>relationships</p>
                    <p>Machine Learning</p>
                    <p>Productivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>


  )
}

export default Home