import { API_INFO_CLEAR } from "./types";
import { populateCarsList } from "../api/endpoints/carsEndpoint";
import { fetchCarsList } from "./carsActions";

export const populateList = () => async dispatch => {
  await populateCarsList();
  fetchCarsList()(dispatch);
};

export const clearApiInfo = () => dispatch => {
  dispatch({ type: API_INFO_CLEAR });
};
