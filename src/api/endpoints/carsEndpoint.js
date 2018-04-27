import { baseApiCall, fetchOptions } from "../fetch";

export const fetchCar = id => {
  return baseApiCall({ path: `/v1/cars/${id}` });
};

export const fetchCarsList = () => {
  return baseApiCall({ path: "/v1/cars" });
};

export const addCar = fields => {
  return baseApiCall({
    path: "/v1/cars",
    options: fetchOptions({ method: "POST", data: fields })
  });
};

export const updateCar = fields => {
  return baseApiCall({
    path: `/v1/cars/${fields.id}`,
    options: fetchOptions({ method: "PATCH", data: fields })
  });
};

export const deleteCar = id => {
  return baseApiCall({
    path: `/v1/cars/${id}`,
    options: fetchOptions({ method: "DELETE" })
  });
};
