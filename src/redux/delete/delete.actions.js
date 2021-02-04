import Axios from "axios";
import DeleteActionTypes from "./delete.types";


export const dell = (id) => {
  return (dispatch) => {
    return Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
          console.log(response);
        dispatch({
          type: DeleteActionTypes.LIST_DELETE_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: DeleteActionTypes.LIST_DELETE_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};