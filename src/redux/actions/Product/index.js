import productTypes from '../../types/Product';
import productApi from '../../../api/Product';

const create = (payload) => async (dispatch) => {
  try {
    await dispatch({
      type: productTypes.CLEAN_ERRORS,
      payload: '',
    });
    const response = await productApi.create(payload);
    await dispatch({
      type: productTypes.CREATE_AD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const { response } = error;
    await dispatch({
      type: productTypes.CREATE_AD_ERROR,
      payload: response ? response.data.error : 'Try again later',
    });
  }
};

const checkStock = (payload) => async (dispatch) => {
  try {
    await dispatch({
      type: productTypes.CLEAN_ERRORS,
      payload: '',
    });
    const response = await productApi.checkStock(payload);
    await dispatch({
      type: productTypes.CHECK_STOCK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const { response } = error;
    await dispatch({
      type: productTypes.CHECK_STOCK_ERROR,
      payload: response ? response.data.error : 'Try again later',
    });
  }
};

export default { create, checkStock };
