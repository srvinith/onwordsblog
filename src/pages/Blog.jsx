import React, { useState,useEffect } from 'react'
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
import Comment from './Comment'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SendRounded } from '@mui/icons-material';



// images //


const Blog = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const notify = () => toast("bookmarked successfully!");
  const [comment, setComment] = useState(false)

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



  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { text: newComment, likes: 0, replies: [] }]);
      setNewComment('');
    }
  };

  const handleLikeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes++;
    setComments(updatedComments);
  };

  const handleReplyComment = (index, replyText) => {
    const updatedComments = [...comments];
    updatedComments[index].replies.push(replyText);
    setComments(updatedComments);
  };
  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };


  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    // Make an HTTP request to fetch the blogs
    fetch("http://192.168.1.8:8000/get_all_blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.all_blogs) {
          // Set the retrieved blogs in the state
          console.log('All Blogs:', data.all_blogs);
          setBlogs(data.all_blogs);
          console.log('all data get')
        }
      
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
  
      });
  }, []);


  return (
    <div className="container">
      <div className=" blog-page">
        <div>
          <h2>What nobody tells you about taking a career break
            (and how to emotionally prepare for one)</h2><br></br>
            <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            {% if blog.blog_text|length > 0 %}
        {% if blog.blog_text[0].type == "image" %}
            <img src="{{ blog.blog_text[0].content }}" alt="First Image">
        {% endif %}
    {% endif %}
            <p>User ID: {blog.name}</p>
            <p>Category: {blog.category}</p>
            <p>Summary: {blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
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
                   
                    <div>
                      <div className='comment-inp'>
                        <input
                          type="text"
                          placeholder="Enter a comment"
                          value={newComment}
                          onChange={handleNewCommentChange}
                          id='comment-inp'
                        />
                        <button onClick={handleAddComment} id='comment-inp'><SendRounded/></button>
                      </div>
                      <div className=" comment-view">
                        {comments.map((comment, index) => (
                          <div className="comment-list">
                            <Comment
                            key={index}
                            text={comment.text}
                            likes={comment.likes}
                            onLike={() => handleLikeComment(index)}
                            onReply={(replyText) => handleReplyComment(index, replyText)} 
                            onDelete={() => handleDeleteComment(index)}     
                          />
                         
                          </div>
                        ))}
                      </div>
                    </div>

                  </Popup>
                </div>
              </div>
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
          <div className="content-story">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni ratione non facilis! Laboriosam, hic nobis, eos atque commodi deserunt repellat quam neque earum veniam quaerat minima! Voluptate quaerat cumque nobis atque nemo sunt quo, quod porro adipisci ad ducimus quos ex corporis consequatur repudiandae ea fugit numquam eveniet impedit nesciunt. Distinctio consectetur quos ipsam necessitatibus inventore dolor, quo, alias repellendus mollitia natus praesentium omnis porro facilis tempora magnam quidem minima veniam! Qui, ex ducimus expedita explicabo numquam facere voluptatibus mollitia repellendus commodi ipsam minima nesciunt sapiente rem at? Molestias quam eum, consequatur unde consequuntur dolores in excepturi error hic ratione accusamus eius facilis, labore quisquam? Ipsum ex eligendi neque quod nobis natus quisquam soluta facilis saepe impedit eaque nisi dicta veritatis laboriosam recusandae velit repellat sit ullam sunt necessitatibus nulla consequuntur, nesciunt aspernatur optio? Eaque, perspiciatis distinctio ipsam dignissimos eum quas sapiente facere temporibus quis, repudiandae veritatis eos neque! Doloremque suscipit neque minus ducimus quam eaque eos quae earum dicta hic, deleniti distinctio mollitia officia eveniet. Harum quos explicabo laborum necessitatibus facere. Recusandae, deleniti. Dolorem odio voluptatibus ut eos sequi ducimus adipisci magnam doloribus reiciendis eius omnis tempore nemo necessitatibus at, quidem doloremque maiores velit debitis. Ab, ad expedita?</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Blog

