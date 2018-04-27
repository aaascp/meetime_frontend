import { USERS_LIST, USERS_TOKEN_UNAUTHORIZED } from "./types";

import * as api from "../api/endpoints/usersEndpoint";

export const fetchUsersList = token => async dispatch => {
  if (!token) return;
  const { error, data } = await api.fetchUsersList(token);

  if (error) {
    dispatch({ type: USERS_TOKEN_UNAUTHORIZED, payload: true });
  } else {
    dispatch({ type: USERS_LIST, payload: data });
  }
};
