//The toggleTable action creator will create a TOGGLE_TABLE action that contains the id of the table to check in/check out.

import { SELECT_TABLE } from "../constants.js";

const selectTable = id => {
  return {
    type: SELECT_TABLE,
    id: id
  };
};

export default selectTable;
