// PostDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CommentSection} from './CommentSection';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(postResponse.data);
        const commentsResponse = await axios.get(`http://localhost:5000/comments?postId=${id}`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <section>
            <h2>Comments</h2>
            {comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
            <CommentSection postId={id} />
          </section>
        </>
      )}
    </div>
  );
};

export default PostDetails;
