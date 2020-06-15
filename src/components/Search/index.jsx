import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from './styles';

export default function Search() {
  const dispatch = useDispatch();

  return (

    <Input placeholder="Procurando algo?" onChange={(e) => dispatch({ type: 'SEARCHING', value: e.target.value })} />

  );
}
