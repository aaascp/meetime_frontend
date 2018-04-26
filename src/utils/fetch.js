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

export { BASE_API, PIPEDRIVE_API, fetchOptions };
