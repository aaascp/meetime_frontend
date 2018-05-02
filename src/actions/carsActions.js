import {
  API_ERROR,
  API_SUCCESS,
  CAR_SELECT,
  CAR_CLEAR,
  CARS_LIST,
  CAR_SELECT_ERROR,
  CARS_LIST_REMOVE,
  CARS_LIST_ADD,
  CARS_LIST_UPDATE
} from "./types";

import * as api from "../api/endpoints/carsEndpoint";

export const clearCar = () => dispatch => {
  dispatch({ type: CAR_CLEAR });
};

export const fetchCar = ({ id, index }) => async dispatch => {
  const { error, data } = await api.fetchCar(id);
  if (error) {
    dispatch({ type: API_ERROR });
  } else {
    dispatch({ type: CAR_SELECT, payload: { car: data, index } });
  }
};

export const fetchCarsList = url => async dispatch => {
  const { error, data, links, totalCount } = await api.fetchCarsList(url);
  if (error) {
    dispatch({ type: API_ERROR });
  } else {
    dispatch({
      type: CARS_LIST,
      payload: { carsList: data, links, totalCount }
    });
  }
};

export const addCar = fields => async dispatch => {
  const { error, data } = await api.addCar(fields);
  if (error) {
    dispatch({ type: API_ERROR });
    dispatch({ type: CAR_SELECT_ERROR, error });
    return error;
  } else {
    dispatch({ type: API_SUCCESS });
    dispatch({ type: CARS_LIST_ADD, car: data });
  }
};

export const updateCar = ({ fields, index }) => async dispatch => {
  const { error, data } = await api.updateCar(fields);
  if (error) {
    dispatch({ type: API_ERROR });
    dispatch({ type: CAR_SELECT_ERROR, error });
    return error;
  } else {
    dispatch({ type: API_SUCCESS });
    dispatch({ type: CARS_LIST_UPDATE, payload: { car: data, index } });
  }
};

export const deleteCar = ({ id, index }) => async dispatch => {
  const { error } = await api.deleteCar(id);
  if (error) {
    dispatch({ type: API_ERROR });
  } else {
    dispatch({ type: CARS_LIST_REMOVE, index });
  }
};
