import Axios from "axios";
import PostActionTypes from "./post.types";


export const getAllPosts = () => {
  return (dispatch) => {
    return Axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        dispatch({
          type: PostActionTypes.LIST_POSTS_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: PostActionTypes.LIST_POSTS_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};