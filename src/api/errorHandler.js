import { actions } from "../actions";

const Status = {
  UNPROCESSABLE_ENTITY: 422,
  UNAUTHORIZED: 401
};

export default error => {
  if (!error.response) {
    return;
  } else if (error.response.status === Status.UNPROCESSABLE_ENTITY) {
    actions.unprocessableEntity(error.response.data);
  } else if (error.response.status === Status.UNAUTHORIZED) {
  } else {
    console.error(error.respose);
  }
};
