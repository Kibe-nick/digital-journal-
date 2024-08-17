import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import PostDetails from './components/PostDetails';
import { Home } from './pages/Home';
import PostList from './pages/PostList';
import CreatePost from './components/CreatePost';
import './App.css';

const App = () => {
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

  const addPost = async (newPost) => {
    try {
      const response = await axios.post('http://localhost:5000/posts', newPost);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList posts={posts} loading={loading} error={error} />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
