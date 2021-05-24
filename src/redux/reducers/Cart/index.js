import cartTypes from '../../types/Cart';

const INITIAL_STATE = {
  products: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.RESET_ALL_VALUES:
      return {
        ...INITIAL_STATE,
      };
    case cartTypes.CLEAN_ERRORS:
      return {
        ...state,
        newProductError: [],
      };
    case cartTypes.INSERT_NEW_PRODUCT:
      return {
        ...INITIAL_STATE,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
