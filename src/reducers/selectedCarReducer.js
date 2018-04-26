import { CAR_SELECT, CAR_CLEAR } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case CAR_SELECT:
      return action.payload;
    case CAR_CLEAR:
      return null;
    default:
      return state;
  }
};
