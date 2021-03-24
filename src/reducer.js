import {
  INCREASE,
  DECREASE,
  REMOVE,
  GET_TOTAL,
  GET_AMOUNT,
  CLEAR_CART,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
  }

  if (action.type === INCREASE) {
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
};

export default reducer;
