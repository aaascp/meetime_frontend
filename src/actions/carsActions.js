import { CAR_SELECT, CAR_CLEAR, FETCH_CARS_LIST } from "./types";

import * as api from "../api/endpoints/carsEndpoint";

export const clearCar = () => dispatch => {
  dispatch({ type: CAR_CLEAR });
};

export const fetchCar = id => async dispatch => {
  const response = await api.fetchCar(id);
  if (response) dispatch({ type: CAR_SELECT, payload: response });
};

export const fetchCarsList = () => async dispatch => {
  const response = await api.fetchCarsList();
  if (response) dispatch({ type: FETCH_CARS_LIST, payload: response });
};

export const addCar = fields => async dispatch => {
  const response = await api.addCar(fields);
  if (response) dispatch({ type: FETCH_CARS_LIST, payload: response });
};

export const updateCar = fields => async dispatch => {
  const response = await api.updateCar(fields);
  if (response) dispatch({ type: FETCH_CARS_LIST, payload: response });
};

export const deleteCar = id => async dispatch => {
  const response = await api.deleteCar(id);
  if (response) dispatch({ type: FETCH_CARS_LIST, payload: response });
};
