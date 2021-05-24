import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StyledSearchContainer } from './styles';

import SearchBar from '../SearchBar';
import cartActions from '../../redux/actions/Cart';

const mapState = ({ cart }) => ({
  products: cart.products,
});

export default function AddToCart() {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [products]);

  const addNewProduct = (event, searchText) => {
    event.preventDefault();
    const isCorrectInput = options.includes(searchText);
    if (!isCorrectInput) return; //Show Error
    setLoading(true);
    dispatch(
      cartActions.addToCart({
        code: '12093',
        name: 'oi',
        description: 'asdw',
        price: 10.99,
      })
    );
  };

  const names = products.map((option) => option.name);
  const codes = products.map((option) => option.code);
  const options = [...names, ...codes];

  return (
    <StyledSearchContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <SearchBar
            searchHandler={addNewProduct}
            autocomplete={true}
            options={options}
            placeholder='Adicionar pelo nome do produto ou pelo codigo de barras'
          />
        </>
      )}
    </StyledSearchContainer>
  );
}
