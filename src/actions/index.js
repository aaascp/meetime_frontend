import {
  CAR_SELECT,
  CAR_CLEAR,
  FETCH_CARS_LIST,
  FETCH_USERS_LIST
} from "./types";

import { PIPEDRIVE_API, BASE_API, fetchOptions } from "../utils/fetch";

export const fetchUsersList = token => async dispatch => {
  if (!token) return;

  const response = await fetch(
    `${PIPEDRIVE_API}/v1/persons?api_token=${token}`,
    fetchOptions({})
  );
  const usersList = await response.json();

  dispatch({ type: FETCH_USERS_LIST, payload: usersList.data });
};

export const fetchCar = id => async dispatch => {
  const response = await fetch(`${BASE_API}/api/v1/cars/${id}`);
  const car = await response.json();

  dispatch({ type: CAR_SELECT, payload: car });
};

export const clearCar = () => async dispatch => {
  dispatch({ type: CAR_CLEAR });
};

export const fetchCarsList = () => async dispatch => {
  const response = await fetch(`${BASE_API}/api/v1/cars`);
  const carsList = await response.json();

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

export const addCar = fields => async dispatch => {
  const response = await fetch(
    `${BASE_API}/api/v1/cars`,
    fetchOptions({ method: "POST", body: fields })
  );
  const carsList = await response.json();

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

export const updateCar = fields => async dispatch => {
  const response = await fetch(
    `${BASE_API}/api/v1/cars/${fields.id}`,
    fetchOptions({ method: "PATCH", body: fields })
  );
  const carsList = await response.json();

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

export const deleteCar = id => async dispatch => {
  const response = await fetch(
    `${BASE_API}/api/v1/cars/${id}`,
    fetchOptions({ method: "DELETE" })
  );
  const carsList = await response.json();

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};
