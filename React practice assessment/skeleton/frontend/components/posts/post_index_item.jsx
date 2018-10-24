import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post, deletePost}) => (
  <div>
    <Link to={`/posts/${post.id}`}>{post.title}</Link>
    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
    <button onClick={() => deletePost(post.id)}>Delete</button>
  </div>
);

export default PostIndexItem;
