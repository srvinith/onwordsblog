// src/Comment.js
import React, { useState } from 'react';
import '../Assets/css/comment.css'

function Comment() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="com-md-12">
                    <center>
                        <div className='comment-background'>
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
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Comment;
