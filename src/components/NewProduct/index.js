import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  StyledContainer,
  StyledTextField,
  StyledButton,
  StyledPaper,
} from './styles';
import productActions from '../../redux/actions/Product';

const mapState = ({ product }) => ({
  newProductSuccess: product.newProductSuccess,
  newProductError: product.newProductError,
});

export default function NewAd() {
  const dispatch = useDispatch();
  const { newProductError, newProductSuccess } = useSelector(mapState);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setLoading(false);
  }, [newProductSuccess, newProductError]);

  const handleCreate = () => {
    if (!code || !name || !description || !price) {
      return false;
      //Exibir erro na tela
    }
    setLoading(true);
    dispatch(productActions.create({ code, name, description, price }));
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <StyledContainer>
            <h1>Cadastrar Produto</h1>
            <StyledPaper>
              <StyledTextField
                required
                label='Codigo'
                value={code}
                placeholder='Codigo'
                onChange={(e) => setCode(e.target.value)}
              />
              <StyledTextField
                required
                label='Nome'
                value={name}
                placeholder='Nome'
                onChange={(e) => setName(e.target.value)}
              />
              <StyledTextField
                required
                label='Descricao'
                value={description}
                placeholder='Descricao'
                onChange={(e) => setDescription(e.target.value)}
              />
              <StyledTextField
                required
                label='Valor'
                value={price}
                placeholder='Valor'
                onChange={(e) => setPrice(e.target.value)}
              />
            </StyledPaper>
            <StyledButton
              color='primary'
              variant='contained'
              onClick={handleCreate}
            >
              Cadastrar Produto
            </StyledButton>
          </StyledContainer>
        </>
      )}
    </>
  );
}
