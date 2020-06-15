import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { CartContainer } from './styles';

function Cart({ product }) {
  const dispatch = useDispatch();

  const increment = (prod) => {
    dispatch({ type: 'UPDATE_AMOUNT', id: prod.code_color, amount: product.amount + 1 });
  };
  const decrement = (prod) => {
    dispatch({ type: 'UPDATE_AMOUNT', id: prod.code_color, amount: product.amount - 1 });
  };
  return (
    <CartContainer>
      <div className="image-container">
        <img src={product.image} alt="" />
      </div>
      <div className="cart-content">
        <div className="cart-info">
          <h3>{product.name}</h3>
          <p>
            Tam :
            {product.size.map((p) => ` ${p} `)}

          </p>
          <div className="cart-controls">
            <button type="button" onClick={() => decrement(product)}>
              <AiOutlineMinusSquare size={30} color="#fff " />
            </button>
            <span>

              {product.amount}
            </span>
            <button type="button" onClick={() => increment(product)}>
              <AiOutlinePlusSquare size={30} color="#fff " />
            </button>

          </div>
        </div>
        <div className="cart-price">
          <p>{product.price}</p>
          <p className="installments">{product.installments}</p>
        </div>
        <button type="button" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', value: product.code_color })}>
          <RiDeleteBin2Line size={20} color="orange" />
          <p>
            Remover Item
          </p>

        </button>
      </div>

    </CartContainer>
  );
}

export default Cart;
