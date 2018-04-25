import { SET_TOKEN } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
