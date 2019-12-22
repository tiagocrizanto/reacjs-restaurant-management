/**
 * In this file, we combine all of our 4 reducers together using the combineReducers() method from the redux library.
 */

import { combineReducers } from "redux";

import selectedTable from "./selectedTable.js";
import tableStatusData from "./tableStatusData.js";
import tableData from "./tableData.js";
import moneyEarned from "./moneyEarned.js";

const reducer = combineReducers({
  selectedTable,
  tableStatusData,
  tableData,
  moneyEarned
});

export default reducer;
