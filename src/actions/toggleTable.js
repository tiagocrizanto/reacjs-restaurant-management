//The toggleTable action creator will create a TOGGLE_TABLE action that contains the id of the table to check in/check out.

import { TOGGLE_TABLE } from "../constants.js";

const toggleTable = id => {
  return {
    type: TOGGLE_TABLE,
    id: id
  };
};

export default toggleTable;
