export default ({ method = "GET", body, cors = false }) => {
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
