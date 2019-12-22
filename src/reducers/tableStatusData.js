/**
 * The tableStatusData reducer is in charge of handling the state changes to the tableStatusData attribute of the overall state. 
 * The tableStatusData state should be an boolean array of size 16 that represents whether each of the 16 tables is checked in or not. 
 * The state array is initialized to contain all false values. 
 * The reducer only handles the TOGGLE_TABLE action. In the TOGGLE_TABLE action logic, we make a copy of the state using slice() and then 
 * toggle the boolean value of the targeted index before returning the copy.
 */
import { TOGGLE_TABLE } from "../constants.js";

var initialTableStatusData = new Array(16).fill(false);

const tableStatusData = (state = initialTableStatusData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

export default tableStatusData;