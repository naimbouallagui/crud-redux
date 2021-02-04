import Axios from "axios";
import UpdateActionTypes from "./update.types";



export const update = (id, body,titre) => {
  return (dispatch) => {
    return Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{body:body,titre:titre})
      .then((response) => {
          console.log(response);
        dispatch({
          type: UpdateActionTypes.LIST_UPDATE_SUCCESS,
          payload: response.data,
        });
        return true;
      })
      .catch((error) => {
        dispatch({
          type: UpdateActionTypes.LIST_UPDATE_FAILURE,
          payload: error.response,
        });
        return false;
      });
  };
};