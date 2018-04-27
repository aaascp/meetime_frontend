import { actions } from "../actions";

const Status = {
  UNPROCESSABLE_ENTITY: "Unprocessable Entity"
};

export default error => {
  console.log("ERROR", error);
  if (error === Status.UNPROCESSABLE_ENTITY) {
    console.log("UNPROCESSABLE_ENTITY", error);
    actions.unprocessableEntity(error);
  } else {
    throw error;
  }
};
