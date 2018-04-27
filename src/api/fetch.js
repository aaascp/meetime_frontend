import axios from "axios";
import handleError from "./errorHandler";

const BASE_API = "http://localhost:9000/api";
const PIPEDRIVE_API = "https://api.pipedrive.com";

const fetchOptions = ({ method = "GET", data, cors = true }) => {
  const options = {
    method: method,
    mode: cors ? "cors" : "same-origin",
    responseType: "application/json"
  };

  if (data) options.data = data;

  return options;
};

const pipedriveApiCall = ({ path, options }) => {
  return apiCall({ url: `${PIPEDRIVE_API}${path}`, options });
};

const baseApiCall = ({ path, options }) => {
  return apiCall({ url: `${BASE_API}${path}`, options });
};

const apiCall = async ({ url, options = fetchOptions }) => {
  try {
    const response = await axios({ url, ...options });
    console.log("Aqui0", response.data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export { pipedriveApiCall, baseApiCall, fetchOptions };
