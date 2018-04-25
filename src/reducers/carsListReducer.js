import { FETCH_CARS_LIST } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS_LIST:
      return action.payload;
    default:
      return state;
  }
}
