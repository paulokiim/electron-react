import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StyledSearchContainer } from './styles';

import SearchBar from '../SearchBar';
import productActions from '../../redux/actions/Product';

const mapState = ({ product }) => ({
  consultedProduct: product.consultedProduct,
  consultedProductError: product.consultedProductError,
});

export default function ConsultProduct() {
  const dispatch = useDispatch();
  const { consultedProduct, consultedProductError } = useSelector(mapState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [consultedProduct, consultedProductError]);

  const handleConsult = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(productActions.checkStock());
  };

  return (
    <StyledSearchContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <SearchBar
            autocomplete={false}
            searchHandler={handleConsult}
            placeholder='Consultar produto pelo nome ou pelo codigo'
          />
        </>
      )}
    </StyledSearchContainer>
  );
}
