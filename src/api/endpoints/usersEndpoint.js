import { pipedriveApiCall } from "../fetch";

export const fetchUsersList = token => {
  if (!token) return;
  return pipedriveApiCall({ path: `/v1/persons?api_token=${token}` });
};
