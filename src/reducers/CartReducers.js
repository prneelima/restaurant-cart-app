import { combineReducers } from 'redux';
import * as types from '../constants/restTypes';

const initialState = {
  menuItems: [
    { id: 1, name: 'Burger', price: 10,description:'(US) A sandwich consisting of a patty made from ground chicken, served in a bun, typically hot and often with other ingredients. The chicken patty used in such a sandwich.' },
    { id: 2, name: 'Fries', price: 5,description:'They are crunchy, flavorful, portable, and a guaranteed hit with the kid and adult crowds alike.' },
    { id: 3, name: 'Drink', price: 2, description : 'Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks.' },
  ],
  cartItems: [],
};

const menuItemsReducer = (state = initialState.menuItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cartItemsReducer = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  menuItems: menuItemsReducer,
  cartItems: cartItemsReducer,
});

export default rootReducer;
