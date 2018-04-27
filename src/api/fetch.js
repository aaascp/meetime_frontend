import handleError from "./errorHandler";

const BASE_API = "http://localhost:9000";
const PIPEDRIVE_API = "https://api.pipedrive.com";

const fetchOptions = ({ method = "GET", body, cors = true }) => {
  const options = {
    method: method,
    mode: cors ? "cors" : "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (body) options.body = JSON.stringify(body);

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
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    handleError(error);
  }
};
export { pipedriveApiCall, baseApiCall, fetchOptions };
