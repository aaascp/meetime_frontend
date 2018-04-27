import { CAR_SELECT, CAR_CLEAR, CARS_LIST } from "./types";

import * as api from "../api/endpoints/carsEndpoint";

export const clearCar = () => dispatch => {
  dispatch({ type: CAR_CLEAR });
};

export const fetchCar = id => async dispatch => {
  const { error, data } = await api.fetchCar(id);
  if (!error) dispatch({ type: CAR_SELECT, payload: data });
};

export const fetchCarsList = () => async dispatch => {
  const { error, data } = await api.fetchCarsList();
  if (!error) dispatch({ type: CARS_LIST, payload: data });
};

export const addCar = fields => async dispatch => {
  const { error, data } = await api.addCar(fields);
  if (!error) dispatch({ type: CARS_LIST, payload: data });
};

export const updateCar = fields => async dispatch => {
  const { error, data } = await api.updateCar(fields);
  if (!error) dispatch({ type: CARS_LIST, payload: data });
};

export const deleteCar = id => async dispatch => {
  const { error, data } = await api.deleteCar(id);
  if (!error) dispatch({ type: CARS_LIST, payload: data });
};
