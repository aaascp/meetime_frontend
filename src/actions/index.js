import * as carsActions from "./carsActions";
import * as usersActions from "./usersActions";

export const actions = {
  ...carsActions,
  ...usersActions
};
