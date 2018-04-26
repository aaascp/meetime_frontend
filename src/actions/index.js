import { FETCH_CARS_LIST, FETCH_USERS_LIST } from "./types";
import fetchOptions from "../utils/fetchOptions";

export const fetchUsersList = token => async dispatch => {
  if (!token) return;

  const result = await fetch(
    `https://api.pipedrive.com/v1/persons?api_token=${token}`,
    fetchOptions({ cors: true })
  );
  const usersList = await result.json();

  dispatch({ type: FETCH_USERS_LIST, payload: usersList.data });
};

export const fetchCarsList = () => async dispatch => {
  // const cars = await fetch('/api/v1/cars');

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

// export const fetchCar = id => async dispatch => {
//   // const car = await fetch(`/api/v1/cars/${id}`);
//   // dispatch({ type: FETCH_CAR, payload: carsList[id - 1] });
//   return carsList[id - 1];
// };

export const fetchCar = async id => {
  // const car = await fetch(`/api/v1/cars/${id}`);
  // dispatch({ type: FETCH_CAR, payload: carsList[id - 1] });
  return carsList[id - 1];
};

export const addCar = fields => async dispatch => {
  // const car = await fetch("/api/v1/cars", fetchOptions('POST', fields));
  const car = { ...fields, id: carsList.length + 1 };
  carsList.push(car);

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

export const updateCar = fields => async dispatch => {
  // const car = await fetch(`/api/v1/cars/${fields.id}`, fechOptions('PATCH', fields));
  const car = { ...fields, id: carsList.length + 1 };
  carsList.splice(fields.id - 1, 1, car);

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

export const deleteCar = id => async dispatch => {
  // const car = await fetch(`/api/v1/cars/${id}`, fechOptions('DELETE', fields));
  carsList.splice(id - 1, 1);

  dispatch({ type: FETCH_CARS_LIST, payload: carsList });
};

const carsList = [
  {
    id: 1,
    user: "User 1",
    model: "Palio",
    year: 2009,
    color: "branco"
  },
  {
    id: 2,
    user: "User 2",
    model: "Sandero",
    year: 2010,
    color: "preto"
  },
  {
    id: 3,
    user: "User 3",
    model: "Clio",
    year: 2011,
    color: "verde"
  },
  {
    id: 4,
    user: "User 4",
    model: "Gol",
    year: 2012,
    color: "branco"
  },
  {
    id: 5,
    user: "User 5",
    model: "Uno",
    year: 2013,
    color: "verde"
  }
];
