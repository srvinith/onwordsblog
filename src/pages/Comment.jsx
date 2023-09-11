import React, { useState } from 'react';

function Comment({ text, likes, onLike, onReply,onDelete }) {
  const [replyText, setReplyText] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleLikeClick = () => {
    onLike();
  };

  const handleReplyClick = () => {
    setShowReplyInput(true);
  };

  const handleReplySubmit = () => {
    if (replyText.trim() !== '') {
      onReply(replyText);
      setReplyText('');
      setShowReplyInput(false);
    }
  };
  const handleDelete=()=>{
    onDelete()
  }

  return (
    <div className="comment">
      <p>{text}</p>
      <button onClick={handleLikeClick}>Like ({likes})</button>
      <button onClick={handleReplyClick}>Reply</button>
      <button onClick={handleDelete}>Delete</button>
      {showReplyInput && (
        <div>
          <input
            type="text"
            placeholder="Reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReplySubmit}>Submit Reply</button>
        </div>
      )}
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
