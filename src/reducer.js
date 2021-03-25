import { REMOVE, GET_TOTALS, TOGGLE_AMOUNT, CLEAR_CART } from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          } else if (action.payload.toggle === "dec") {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      }),
    };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, amount, total };
  }

  return state;
};

export default reducer;
