import * as carsActions from "./carsActions";
import * as usersActions from "./usersActions";
import * as apiActions from "./apiActions";

export const actions = {
  ...carsActions,
  ...usersActions,
  ...apiActions
};
