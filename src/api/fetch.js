import axios from "axios";
import handleError from "./errorHandler";

const BASE_API = "http://localhost:9000/api";
const PIPEDRIVE_API = "https://api.pipedrive.com";

export const fetchOptions = ({ method = "GET", data, mode = "cors" }) => {
  const options = {
    method: method,
    mode,
    responseType: "json"
  };

  if (data) options.data = data;

  return options;
};

export const pipedriveApiCall = async ({ path, options }) => {
  const { error, data } = await apiCall({
    url: `${PIPEDRIVE_API}${path}`,
    options
  });

  if (error) {
    return { error };
  } else {
    return { data: data.data };
  }
};

export const baseApiCall = async ({ path, options }) => {
  const { error, data } = await apiCall({ url: `${BASE_API}${path}`, options });
  return { error, data };
};

const apiCall = async ({ url, options = fetchOptions }) => {
  try {
    const response = await axios({ url, ...options });
    return { data: response.data };
  } catch (error) {
    handleError(error);
    return { error };
  }
};
