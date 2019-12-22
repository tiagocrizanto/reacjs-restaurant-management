/* The addTableItem action creator will create a ADD_TABLE_ITEM action that contains a tableId to indicate which 
    table to add to and an item object with a name and a price to indicate what to add. */

import { ADD_TABLE_ITEM } from "../constants.js";

const addTableItem = (name, price, id) => {
  return {
    type: ADD_TABLE_ITEM,
    tableId: id,
    item: {
      name: name,
      price: price
    }
  };
};

export default addTableItem;
