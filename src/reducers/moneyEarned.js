/**
 * The moneyEarned reducer is in charge of handling the state changes to the moneyEarned attribute of the overall state. 
 * The moneyEarned state should just be an integer. The state is initialized to 0. The reducer only handles the INCREMENT_MONEY_EARNED action. 
 * In the INCREMENT_MONEY_EARNED action logic, the action increment amount is added to the previous state.
 */
import { INCREMENT_MONEY_EARNED } from "../constants.js";

const moneyEarned = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_MONEY_EARNED:
      return state + action.amount;
    default:
      return state;
  }
};

export default moneyEarned;
