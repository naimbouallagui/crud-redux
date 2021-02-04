import UpdateActionTypes from "./update.types";

const initialState = {
  success: null,
  failure: null,
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UpdateActionTypes.LIST_UPDATE_SUCCESS:
      return { ...state,  success: true };

    case UpdateActionTypes.LIST_UPDATE_FAILURE:
      return { ...state, success: false, failure: true };

    default:
      return state;
  }
};

export default updateReducer;
