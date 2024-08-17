import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  // Destructure the necessary fields from the post object
  const { title, content, id, createdAt } = post;

  // Truncate the content if it is too long
  const truncatedContent = content.length > 100 ? `${content.substring(0, 100)}...` : content;

  // Format the createdAt date
  const formattedDate = createdAt ? new Date(createdAt).toLocaleString() : 'Date not available';

  return (
    <div className="post">
      <h2><Link to={`/posts/${id}`}>{title}</Link></h2>
      <p className="meta">Posted on {formattedDate}</p>
      <p>{truncatedContent}</p>
      <Link to={`/posts/${id}`} className="read-more">Read more</Link>
    </div>
  );
};

export default Post;
