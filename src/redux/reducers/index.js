import { combineReducers } from 'redux';

import productReducer from './Product';
import cartReducer from './Cart';

export default combineReducers({
  product: productReducer,
  cart: cartReducer,
});
