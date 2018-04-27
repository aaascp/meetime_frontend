import { actions } from "../actions";

const Status = {
  UNPROCESSABLE_ENTITY: 422
};

export default error => {
  console.log("Aqui1", error);
  if (error.status === Status.UNPROCESSABLE_ENTITY) {
    actions.unprocessableEntity(error);
  } else {
    throw error;
  }
};
