import { CARS_LIST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case CARS_LIST:
      return action.payload || [];
    default:
      return state;
  }
};
