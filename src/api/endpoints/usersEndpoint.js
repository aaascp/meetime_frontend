import { pipedriveApiCall } from "../fetch";

export const fetchUsersList = async token => {
  if (!token) return;
  const { error, data } = await pipedriveApiCall({
    path: `/v1/persons?api_token=${token}`
  });

  return { error, data };
};
