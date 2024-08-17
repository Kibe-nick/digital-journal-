import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Posts'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <Link to="/create">
        <button>Create New Post</button>
      </Link>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {posts.length === 0 && !loading && !error && <p>No posts available. Create a new post!</p>}
      {posts.length > 0 && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
