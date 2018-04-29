import {
  CARS_LIST,
  CARS_LIST_REMOVE,
  CARS_LIST_ADD,
  CARS_LIST_UPDATE
} from "../actions/types";

const CARS_LIST_DEFAULT = {
  value: [],
  links: null,
  totalCount: 0
};

export default (state = CARS_LIST_DEFAULT, action) => {
  switch (action.type) {
    case CARS_LIST:
      return {
        ...state,
        value: [...state.value, ...action.payload.carsList],
        links: action.payload.links,
        totalCount: action.payload.totalCount
      };
    case CARS_LIST_REMOVE:
      state.value.splice(action.index, 1);
      return {
        ...state,
        value: [...state.value]
      };
    case CARS_LIST_ADD:
      return {
        ...state,
        value: [action.car, ...state.value]
      };
    case CARS_LIST_UPDATE:
      state.value.splice(action.payload.index, 1, action.payload.car);
      return {
        ...state,
        value: [...state.value]
      };
    default:
      return state;
  }
};
