import { USERS_LIST, USERS_TOKEN_UNAUTHORIZED } from "../actions/types";

const USERS_LIST_DEFAULT = {
  value: [],
  unauthorized: false
};

export default (state = USERS_LIST_DEFAULT, action) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        value: action.payload || [],
        unauthorized: false
      };
    case USERS_TOKEN_UNAUTHORIZED:
      return { ...state, unauthorized: action.payload };
    default:
      return state;
  }
};
