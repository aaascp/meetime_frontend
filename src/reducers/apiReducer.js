import { API_ERROR, API_SUCCESS, API_INFO_CLEAR } from "../actions/types";

const API_DEFAULT = { error: false, success: false };

export default (state = API_DEFAULT, action) => {
  switch (action.type) {
    case API_ERROR:
      console.log("Aqui1");
      return { ...state, error: true };
    case API_SUCCESS:
      console.log("Aqui2");
      return { ...state, success: true };
    case API_INFO_CLEAR:
      return { ...state, error: false, success: false };
    default:
      return state;
  }
};
