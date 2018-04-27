import { actions } from "../actions";

const Status = {
  UNPROCESSABLE_ENTITY: 422
};

export default error => {
  if (error.response.status === Status.UNPROCESSABLE_ENTITY) {
    actions.unprocessableEntity(error.response.data);
  } else {
    throw error;
  }
};
