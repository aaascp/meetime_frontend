import { API_INFO_CLEAR } from "./types";

export const clearApiInfo = () => dispatch => {
  dispatch({ type: API_INFO_CLEAR });
};
