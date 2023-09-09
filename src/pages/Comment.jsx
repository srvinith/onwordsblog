import React, { useState } from 'react';

function Comment({ comment, onDelete }) {
  const handleDeleteComment = () => {
    // Assuming comment.id is the unique identifier for the comment
    // Make an HTTP request to delete the comment on the server
    // Once the comment is deleted on the server, update the UI
    onDelete(comment.id);
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={handleDeleteComment}>Delete</button>
    </div>
  );
}

function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: 'This is comment 1' },
    { id: 2, text: 'This is comment 2' },
    // ...
  ]);

  const handleDeleteComment = (commentId) => {
    // Filter out the deleted comment from the comments array
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
      ))}
    </div>
    
  );
}

export default CommentList;
