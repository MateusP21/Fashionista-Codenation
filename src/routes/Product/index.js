import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { ProductContainer, Item, ItemList } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [sizeSelected, setSizeSelected] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const products = await (await (fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'))).json();
      setProduct(products.filter((p) => p.code_color == (props.match.params.id).split('-')[0]));
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleAddProduct = (prod) => {
    const {
      name, image, regular_price, actual_price, installments, code_color,
    } = prod[0];
    const cartProd = {
      name,
      image,
      price: regular_price !== actual_price ? actual_price : regular_price,
      size: [sizeSelected],
      installments,
      code_color,
    };
    if (!sizeSelected) {
      return toast.warn('Por favor escolha um tamanho');
    }
    dispatch({ type: 'ADD_TO_CART', cartProd });
  };
  return (
    <ProductContainer>
      { product.length > 0

      && (
      <Item>
        <div className="image-container">
          <img src={product[0].image} alt="" />
        </div>
        <div className="product-details">
          <h1>{product[0].name}</h1>
          <p>
            Cor:

            {product[0].color}
          </p>
          <ul>
            {
              product[0].sizes.map((s, index) => (
                <ItemList
                  onClick={() => setSizeSelected(s.size)}
                  size={sizeSelected}
                  key={index}
                  available={s.available}
                >
                  {s.size}
                </ItemList>
              ))
            }
          </ul>

          {product[0].regular_price !== product[0].actual_price
            ? (
              <>
                <span>{product[0].actual_price}</span>
                <span>{product[0].regular_price}</span>
              </>
            )
            : <span>{product[0].regular_price}</span>}
          <p>
            {product[0].installments}

            sem juros
          </p>
          <button type="button" onClick={() => handleAddProduct(product)}>Adicionar ao carrinho</button>
        </div>
      </Item>
      )}
      <ToastContainer />
    </ProductContainer>
  );
}
