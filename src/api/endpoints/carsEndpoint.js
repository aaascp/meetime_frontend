import { baseApiCall, fetchOptions } from "../fetch";
import { parseNavLink, getTotalCount } from "../../utils/headerHelper";

export const fetchCar = async id => {
  const { error, data } = await baseApiCall({
    path: `/v1/cars/${id}`
  });
  return { error, data };
};

export const fetchCarsList = async url => {
  const { error, data, headers } = await baseApiCall({
    url,
    path: "/v1/cars"
  });

  if (error) {
    return { error };
  } else {
    const links = parseNavLink(headers);
    const totalCount = getTotalCount(headers);
    return { data, links, totalCount };
  }
};

export const addCar = async fields => {
  const { error, data } = await baseApiCall({
    path: "/v1/cars",
    options: fetchOptions({ method: "POST", data: fields })
  });

  if (error) {
    return { error };
  } else {
    return { data };
  }
};

export const updateCar = async fields => {
  const { error, data } = await baseApiCall({
    path: `/v1/cars/${fields.id}`,
    options: fetchOptions({ method: "PATCH", data: fields })
  });

  if (error) {
    return { error: JSON.parse(error.config.data) };
  } else {
    return { data };
  }
};

export const deleteCar = async id => {
  const { error, data } = await baseApiCall({
    path: `/v1/cars/${id}`,
    options: fetchOptions({ method: "DELETE" })
  });
  return { error, data };
};
