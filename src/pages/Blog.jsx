import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// images //
import che from '../Assets/images/che.webp'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import IosShareIcon from '@mui/icons-material/IosShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// images //


const Blog = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const notify = () => toast("bookmarked successfully!");
  const [comment, setComment] = useState(false)
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  const shareContent = {
    title: 'Share Title',
    text: 'Share description or text goes here',
    url: 'https://example.com', // URL to share
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share(shareContent)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this device/browser.');
    }
  };
  return (
    <div className="container">
      <div className=" blog-page">
        <div>
          <h2>What nobody tells you about taking a career break
            (and how to emotionally prepare for one)</h2><br></br>
          <div className=" blog-logo chegue">
            <div>
              <img src={che} alt="che" className='che' />
            </div>
            <div className='blog-che'>
              <span>
                <h6>CHEGUEVARA</h6>
                <p >Follow</p>
              </span>
            </div>

          </div>
          <hr />
          <div className='blog-icon'>
            <div className='blog-icons'>
              <div className='trigger-btn'>
                {/* <BackHandIcon /> */}
                <div>
                  <span onClick={handleLikeClick}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </span>
                  <span>{likeCount} </span>
                </div>
                {/* <ChatBubbleOutlineIcon onClick={() => { setComment(!comment) }} /> */}
                <div >

                  <Popup trigger=
                    {<ChatBubbleOutlineIcon onClick={() => { setComment(!comment) }} />}
                    position="right center" className='comment-sec'>
                    <div className="comment-sec">
                      <div>
                        <h6>Instagram Comments</h6>
                        <form onSubmit={handleSubmit}>
                          <input className='comment-section'
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                          />
                          <button type="submit">Post</button>
                        </form>
                        
                        <ul>
                          {comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </Popup>
                </div>
              </div>
              { }
            </div>
            <div className='blogger'>
              <div className=" bookmark-blog">
                <div className="bookmark">
                  <div className="unbookmark" onClick={toggleBookmark}>
                    {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={notify} />}
                    <ToastContainer />
                  </div>

                </div>
              </div>
              {/* < BookmarkBorderIcon /> */}
              <NotStartedIcon />
              {/* <IosShareIcon /> */}
              <div>
                <p onClick={handleShareClick}> <IosShareIcon />
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className='blog-para'>In 2022, I felt the calling to take a step back from work and re-evaluate the things most important to me.

              I explained my decision in the previous article, “How I knew it was time to quit my job for a career break (and how it is going one year in)”. The TL;DR is that it has been an incredibly rewarding journey, though not one without its fair share of challenges. I’ve learned a tremendous amount about my unhealthy relationship with productivity and my fears of uncertainty. By allowing myself time to travel, visit family, and learn new skills, I rediscovered the inspiration that had been buried over time.

              The following is part 2 of my Career Break series where I share the honest realizations from the struggles I faced and how I navigated it. If you are at a similar crossroads in life, I hope that my experience can help provide a more realistic picture of the less romanticized parts of this endeavor — and why I still believe it’s one of the best investments I’ve ever made.</p>
            <h3>Takeaway 1: Define your personal definition of enough, or the hamster wheel will follow you</h3>
            <p className='blog-para'> Detaching from the overachievement mentality was way harder than I anticipated.<br></br>

              After the first couple of fulfilling months of traveling and doing volunteering projects, I had a period of down time where I was between destinations. This was when the comparison trap started getting a hold of me.<br></br>

              Aimlessly scrolling the LinkedIn updates, a little voice started creeping up inside reminding me of the uncertainties ahead:</p>
            <div className='blog-para'>
              <i>“What am I doing?”</i>
              <i>“Look at everyone else getting promotions…am I wasting my time out here?”
              </i><br></br>
              <i>“What do I have to show for my year off?”</i>
            </div>
            <p className='blog-para'>And I knew exactly where that familiar little voice came from.</p><br></br>
          </div>
          <p className='blog-para'>
            Growing up in a turbulent family dynamic, I was driven by anxiety to keep the peace. It was painful for me to constantly see my loved ones in pain, so I tried everything I could to not mess anything up. During those early years, I developed a habit of over-optimizing for everything and started linking my self-worth to accomplishments. I needed an illusion of control.

            The result of that was becoming a Grade A people pleaser.

            The crazier thing is that society heavily rewards some of these personality traits that are actually symptoms of trauma in disguise. We live in a world that rewards us for swallowing our feelings and just be in the constant pursuit of more — more success, more money, more prestige, more material upgrades. More of everything. More always seems better, safer, and more respectable.

            While I was thankful for where this hustle had taken me so far in life, I eventually started feeling stuck in it. I realized what drove me to prioritize others’ approval over the work-life balance I thought I wanted was a mindset of scarcity and insecurity. No matter what I did, I never felt like I was enough.

            This was precisely what I was looking to heal by stepping away from my work, although I didn’t realize exactly how much work I needed to do on my inner self.

            When I went on the career break, the first thing I wanted to do was set concrete goals for myself to accomplish with the free time. While it was good to have things to strive toward, the problem was the perfectionism with which I set those goals. I wanted to have something impressive to show for my time “off”.

            Over-fixated on a picture perfect career break story, I was impatient with myself in the moments of non-doing. Without that external validation, I felt lost.

            But the truth is, external validation doesn’t lead us to contentment and fulfillment. It only keeps us chasing more.

            I finally recognized that if my goal was to heal a toxic relationship with productivity, I couldn’t
            simply replace an endless pursuit of work achievements with an endless pursuit of bucket list items. Otherwise, I’d still be chained to expectations and forever hustling toward more superficial embellishments to enhance my “life resume.”
          </p>

          <h3>I want to live a good life, not just appear to be living one.</h3>
          <p className='blog-para'>
            This is completely an internal shift. To reach this point, I first need to have a clear enough picture of what kind of life I actually want to live. We will perpetually chase after some
            arbitrary metric and feel behind unless we can answer for ourselves this age-old question: “Do I want what I want because I truly want it, or because society said I want it?”

            When we aren’t clear on our version of success, we end up measuring our lives against someone else’s definition of success. That’s why we feel behind in life.

            True freedom requires patience and understanding of where we are and where we are trying to go. Finding our own freedom is the real work of our lives.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog

