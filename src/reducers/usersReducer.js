import { FETCH_USERS_LIST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_LIST:
      return action.payload;
    default:
      return state;
  }
};
