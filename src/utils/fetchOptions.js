export default (method, body) => {
  return {
    method: method,
    body: JSON.Stringfy(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
};
