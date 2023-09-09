import React, { useState } from 'react';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ]);

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comment Section</h2>
      <div className="comment-list">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            text={comment.text}
            onDelete={() => handleDeleteComment(comment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
