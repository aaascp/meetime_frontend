import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  cars: carsReducer,
  token: tokenReducer
});
