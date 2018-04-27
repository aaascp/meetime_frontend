import { API_ERROR_422 } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case API_ERROR_422:
      return { ...state, formError: action.payload };
    default:
      return state;
  }
};
