import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import usersReducer from "./usersReducer";
import carsListReducer from "./carsListReducer";
import selectedCarReducer from "./selectedCarReducer";
import carsFormReducer from "./carsFormReducer";

export default combineReducers({
  usersList: usersReducer,
  carsList: carsListReducer,
  selectedCar: selectedCarReducer,
  form: reduxForm.plugin({ carsForm: carsFormReducer })
});
