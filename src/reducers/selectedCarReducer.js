import { CAR_SELECT, CAR_CLEAR, CAR_SELECT_ERROR } from "../actions/types";

const SELECTED_CAR_DEFAULT = {
  value: null,
  error: false
};

export default (state = SELECTED_CAR_DEFAULT, action) => {
  switch (action.type) {
    case CAR_SELECT:
      return { ...state, value: action.payload, error: false };
    case CAR_SELECT_ERROR:
      return { ...state, value: action.payload, error: true };
    case CAR_CLEAR:
      return SELECTED_CAR_DEFAULT;
    default:
      return state;
  }
};
