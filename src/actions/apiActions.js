import { API_ERROR_422 } from "./types";

export const unprocessableEntity = error => dispatch => {
  dispatch({ type: API_ERROR_422, payload: error });
};
