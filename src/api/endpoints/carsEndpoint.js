import { baseApiCall, fetchOptions } from "../fetch";

export const fetchCar = async id => {
  const { error, data } = await baseApiCall({ path: `/v1/cars/${id}` });
  return { error, data };
};

export const fetchCarsList = async () => {
  const { error, data } = await baseApiCall({ path: "/v1/cars" });
  return { error, data };
};

export const addCar = async fields => {
  const { error, data } = await baseApiCall({
    path: "/v1/cars",
    options: fetchOptions({ method: "POST", data: fields })
  });
  return { error, data };
};

export const updateCar = async fields => {
  const { error, data } = await baseApiCall({
    path: `/v1/cars/${fields.id}`,
    options: fetchOptions({ method: "PATCH", data: fields })
  });
  return { error, data };
};

export const deleteCar = async id => {
  const { error, data } = await baseApiCall({
    path: `/v1/cars/${id}`,
    options: fetchOptions({ method: "DELETE" })
  });
  return { error, data };
};
