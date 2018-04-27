import { FETCH_USERS_LIST } from "./types";

import * as api from "../api/endpoints/usersEndpoint";

export const fetchUsersList = token => async dispatch => {
  if (!token) return;
  const response = await api.fetchUsersList(token);

  if (response) dispatch({ type: FETCH_USERS_LIST, payload: response.data });
};
