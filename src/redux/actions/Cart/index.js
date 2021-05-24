import cartTypes from '../../types/Cart';

const addToCart = (payload) => async (dispatch) => {
  await dispatch({
    type: cartTypes.INSERT_NEW_PRODUCT,
    payload,
  });
};

export default { addToCart };
