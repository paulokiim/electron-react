import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddToCart from '../components/ConsultProduct';
import DataTable from '../components/DataTable';

const columns = [
  { id: 'code', label: 'Codigo', minWidth: 170 },
  { id: 'name', label: 'Nome', minWidth: 100 },
  {
    id: 'description',
    label: 'Descricao',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'price',
    label: 'Preco',
    minWidth: 170,
    align: 'right',
  },
];

const mapState = ({ cart }) => ({
  products: cart.products,
});

export default function MainPage() {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  return (
    <>
      <AddToCart />
      <DataTable rowData={products} columnData={columns} />
    </>
  );
}
