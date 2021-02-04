import DeleteActionTypes from "./delete.types";

const initialState = {
  success: null,
  failure: null,
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DeleteActionTypes.LIST_DELETE_SUCCESS:
      return { ...state,  success: true };

    case DeleteActionTypes.LIST_DELETE_FAILURE:
      return { ...state, success: false, failure: true };

    default:
      return state;
  }
};

export default deleteReducer;
