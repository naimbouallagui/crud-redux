import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Post from "../../components/Post";
import { getAllPosts } from "../../redux/post/post.actions";
import "./index.styles.css"
import {dell} from "../../redux/delete/delete.actions";
import {update} from "../../redux/update/update.action";


const ListPosts = ({ fetchPosts, listsPosts,fetchDelete, fetchUpdate }) => {
    const [count, setCount] = useState(0)
  useEffect(() => {
    fetchPosts();
    setCount(listsPosts.length)
  }, [fetchPosts, fetchDelete, fetchUpdate ]);

  return (
    <div>
        <h1 className="text-green">List Posts: {count}</h1>
      {listsPosts.map((post) => (
        <Post post={post} del={()=>fetchDelete(post.id)} upd={()=> fetchUpdate(post.id, "ok", "bonjour")} key={post.id}/>
      ))}
      
    </div>
  );
};
const mapStateToProps = (state) => ({
  listsPosts: state.posts.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(getAllPosts()),
  fetchDelete:(id) => dispatch(dell(id)),
  fetchUpdate:(id, body, titre) => dispatch( update(id, body, titre))
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
