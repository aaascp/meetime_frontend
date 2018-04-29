import { CAR_SELECT, CAR_CLEAR, CAR_SELECT_ERROR } from "../actions/types";

const SELECTED_CAR_DEFAULT = {
  value: null,
  index: null,
  error: false
};

export default (state = SELECTED_CAR_DEFAULT, action) => {
  switch (action.type) {
    case CAR_SELECT:
      return {
        ...state,
        value: action.payload.car,
        index: action.payload.index,
        error: false
      };
    case CAR_SELECT_ERROR:
      return { ...state, value: action.error, error: true };
    case CAR_CLEAR:
      return SELECTED_CAR_DEFAULT;
    default:
      return state;
  }
};
