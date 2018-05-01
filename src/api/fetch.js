import axios from "axios";

const BASE_API = "https://meecarros-backend.herokuapp.com/api";
const PIPEDRIVE_API = "https://api.pipedrive.com";

export const fetchOptions = ({ method = "GET", data }) => {
  const options = {
    method: method,
    crossDomain: true,
    responseType: "json"
  };

  if (data) options.data = data;

  return options;
};

export const pipedriveApiCall = async ({ path, options }) => {
  const { error, response } = await apiCall({
    url: `${PIPEDRIVE_API}${path}`,
    options: fetchOptions({ ...options })
  });

  if (error) {
    return { error };
  } else {
    return { error, data: response.data.data };
  }
};

export const baseApiCall = async ({ url, path, options }) => {
  const { error, response } = await apiCall({
    url: url || `${BASE_API}${path}`,
    options: fetchOptions({ ...options })
  });

  if (error) {
    return { error };
  } else {
    return { data: response.data, headers: response.headers };
  }
};

const apiCall = async ({ url, options }) => {
  try {
    const response = await axios({ url, ...options });
    return { response };
  } catch (error) {
    return { error };
  }
};
