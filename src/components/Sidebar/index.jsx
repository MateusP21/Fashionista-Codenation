import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import Cart from '../Cart/index';
import { SideNav } from './styles';


function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const cartState = useSelector((state) => ({
    cart: state.cart.map((product) => ({
      ...product,
    })),
    total: state.cart.reduce((total, item) => total + Number(item.price.split(' ')[1].replace(',', '.')).toFixed(2) * item.amount, 0),
  }));
  const dispatch = useDispatch();

  return (

    <SideNav animationIn="bounceInRight" animationOut="bounceOutRight" animationOutDuration={1000} isVisible={sidebar.sidebar}>
      <button type="button">
        <AiOutlineClose size={20} onClick={() => dispatch({ type: 'MENU' })} />
      </button>

      <>
        {
               cartState.length === 0 || cartState.total === 0 && (
               <div className="default-message">
                 <span>¯\_(ツ)_/¯</span>
                 <br />
                 <h3>Não há nada aqui</h3>
               </div>
               )
           }
        <div className="window-cart">
          {cartState.cart.map((c) => <Cart product={c} />)}
        </div>

        <div className="total">
          <h1>
            { cartState.total > 0
                   && `TOTAL: ${formatPrice(cartState.total)}`}
          </h1>

        </div>
      </>


    </SideNav>


  );
}

export default Sidebar;
