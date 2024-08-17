// src/components/CommentSection.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CommentSection.css';

export const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/comments', { postId, content: comment });
      setComment('');
      // Refresh comments or handle the state update here
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


