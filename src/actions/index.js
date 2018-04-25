import { SET_TOKEN, FETCH_CARS } from "./types";

export const setToken = token => {
  return { type: SET_TOKEN, payload: token };
};

export const fetchCars = () => async dispatch => {
  // const cars = await fetch('/api/v1/cars');
  const cars = ["Palio", "Sandero", "Clio", "Gol", "Uno"];

  dispatch({ type: FETCH_CARS, payload: cars });
};
