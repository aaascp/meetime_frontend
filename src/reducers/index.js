import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import carsListReducer from "./carsListReducer";
import selectedCarReducer from "./selectedCarReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  cars: carsListReducer,
  selectedCar: selectedCarReducer,
  token: tokenReducer,
  form: reduxForm
});
