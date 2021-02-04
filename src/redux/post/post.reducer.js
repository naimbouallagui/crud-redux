import PostActionTypes from "./post.types";

const initialState = {
  allPosts: [],
  success: null,
  failure: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostActionTypes.LIST_POSTS_SUCCESS:
      return { ...state, allPosts: action.payload, success: true };

    case PostActionTypes.LIST_POSTS_FAILURE:
      return { ...state, success: false, failure: true};

    default:
      return state;
  }
};

export default postReducer;
