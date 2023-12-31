import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
    } else {
      const newItem = {};
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  // return state
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
