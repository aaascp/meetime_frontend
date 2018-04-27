import { baseApiCall, fetchOptions } from "../fetch";

export const fetchCar = id => {
  return baseApiCall({ ath: `/api/v1/cars/${id}` });
};

export const fetchCarsList = () => {
  return baseApiCall({ path: "/api/v1/cars" });
};

export const addCar = fields => {
  return baseApiCall({
    path: "/api/v1/cars",
    options: fetchOptions({ method: "POST", body: fields })
  });
};

export const updateCar = fields => {
  return baseApiCall({
    path: `/api/v1/cars/${fields.id}`,
    options: fetchOptions({ method: "PATCH", body: fields })
  });
};

export const deleteCar = id => {
  return baseApiCall({
    path: `/api/v1/cars/${id}`,
    options: fetchOptions({ method: "DELETE" })
  });
};
