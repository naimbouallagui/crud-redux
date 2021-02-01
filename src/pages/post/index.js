import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Post from "../../components/Post";
import { getAllPosts } from "../../redux/post/post.actions";
import "./index.styles.css"

const ListPosts = ({ fetchPosts, listsPosts }) => {
    const [count, setCount] = useState(0)
  useEffect(() => {
    fetchPosts();
    setCount(listsPosts.length)
  }, [fetchPosts]);

  return (
    <div>
        <h1 className="text-green">List Posts: {count}</h1>
      {listsPosts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
      
    </div>
  );
};
const mapStateToProps = (state) => ({
  listsPosts: state.posts.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(getAllPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
