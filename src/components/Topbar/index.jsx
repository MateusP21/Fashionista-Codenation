import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from './styles';
import Search from '../Search';

export default function Topbar() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.reduce((t, v) => t + v.amount, 0));

  return (
    <Header>
      <Link to="/">
        <h1>Fashionista</h1>
      </Link>

      <div className="options">
        <Search />
        <div>
          <h3>

            {items}

          </h3>
          <button type="button">
            <AiOutlineShoppingCart size={24} onClick={() => dispatch({ type: 'MENU', value: 'cart' })} />
          </button>
        </div>

      </div>
    </Header>
  );
}
