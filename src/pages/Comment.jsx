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

export default Comment;
