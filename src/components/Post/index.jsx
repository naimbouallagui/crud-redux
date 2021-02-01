import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', flex: 'wrap' }}>
      <p>{post.title}</p>
      <button style={{background: 'yellow' }}>update</button>
      <button style={{background: 'red'}}>delete</button>
    </div>
  );
};

export default Post;
