import productTypes from '../../types/Product';

const INITIAL_STATE = {
  newProductSuccess: false,
  newProductError: [],
  consultedProduct: {},
  consultedProductError: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.RESET_ALL_VALUES:
      return {
        ...INITIAL_STATE,
      };
    case productTypes.CLEAN_ERRORS:
      return {
        ...state,
        newProductError: [],
      };
    case productTypes.CREATE_AD_SUCCESS:
      return {
        ...state,
        newProductError: [],
        newProductSuccess: action.payload ? true : false,
      };
    case productTypes.CREATE_AD_ERROR:
      return {
        ...state,
        newProductSuccess: false,
        newProductError: state.newProductError.includes(action.payload)
          ? state.newProductError
          : [...state.newProductError, action.payload],
      };
    case productTypes.CHECK_STOCK_SUCCESS:
      return {
        ...state,
        consultedProduct: action.payload,
      };
    case productTypes.CHECK_STOCK_ERROR:
      return {
        ...state,
        consultedProduct: {},
        consultedProductError: state.consultedProductError.includes(
          action.payload
        )
          ? state.consultedProductError
          : [...state.consultedProductError, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
