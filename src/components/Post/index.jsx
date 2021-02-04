import React from "react";

const Post = ({ post,del, upd }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', flex: 'wrap' }}>
      <p>{post.title}</p>
      <button style={{background: 'yellow' }} onClick={upd}>update</button>
      <button style={{background: 'red'}} onClick={del}>delete</button>
    </div>
  );
};

export default Post;
