import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import usersReducer from "./usersReducer";
import carsListReducer from "./carsListReducer";

export default combineReducers({
  users: usersReducer,
  cars: carsListReducer,
  form: reduxForm
});
