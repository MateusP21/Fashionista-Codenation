import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from './styles';

function Card({ product }) {
  const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdYAAAJSBAMAAACM/fk6AAAAG1BMVEX///+Wlpajo6O9vb3Kysrk5OSwsLDX19fx8fH5qNEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADVklEQVR4nO3XTU/jVhQG4EM+iJfYSQxLzFA0y0DVfUDqnozUqkuMqg7LZDPrQCt+d69NAiOR0TCVRk3T50Ey5p4D8htfX18iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgO+v+MamL/YPRi/nnYN/fkHf0bdnrTb3PNy8nO961qvly/nOZP1lc89vn53vTNY32NqsVbeY/lrMo3+bDtGrJkU6fIzn8bapc3BRXj8Vq9RZzjsH9WmqfCrnq1oR9XV0j+KqHfmXU22Wrv32aliej2NW1GkprYtREedFPn8eb5s65bvzo1QcNllnRXXYKU/rSfTyarSqFbGYxt5xN68OtzjrTT+fDoZxPu8X0S+XH4r0w8Px83jb1CmWvWEqzpqs9XW/7JSxfxT377Nq2dZSz/1NzKaLSXayxVnnkS+zMi7StI39cfSK/eMYjJ/H26bOYWRltymmpvTM/pgG+qP0+cRi0tbS4P5BXF7fRiyutzfrsrn4Zs3p580dyYq9SWSjz8abrEfpmIr9Jmv1UzQDKWAdsXfT1tJXbxwnkebB/XR7s8ZTpv5tnsfeccp6n+f56Hk8ntamdGyLzfOav2tvXXMzo3Pc1po/MMqGWfrVfPuzLsqfq3Tl6XSWrne4IWtbTOPZp/ywmQBPWQ/WWeNsMO43WSdbnzXN2ap55tJ9nTSV11nbYrtv+qtIE7c/XM3hddbz7nHWrmVbn7WILI/uYQzaufpxQ9a0Ng2a/pP0QaQFqXe4WpvWWWeLSfPtcb71WavlY57u2/Kh6I3icbwha7qR++07Z57eOcVytn7nrLPu1fO4nGb1Fq/Dq0yXZ2V9F5dFWWRVkU83ZI3z3/9o+hdFNe6UzX7jaS+xzrqfp3931iNb6CVr2gB+eB+D+q6MP9s94uusvfqu6R/UZ9edozr1rPaIq6yD9DLOLrZ3j/ja0/LyNf+ZOF/W+yF6/5esg7QfHr+lcQeyRpW2Am/p24Wsj/npm/p2ISsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwK/4G4qJiOk0Wxi8AAAAASUVORK5CYII=';
  return (
    <CardContainer prod={product}>
      <div className="product-image">
        <img src={product.image ? product.image : defaultImage} alt="" />
      </div>
      <div style={{
        textAlign: 'center', padding: '10px', backgroundColor: '#ff679b', color: 'white',
      }}
      >
        <h4>{product.name}</h4>
      </div>
      <div className="product-info">
        <Link to={`/produto/${product.code_color}-${product.name}`}>
          <button type="button">
            Ver detalhes
          </button>
        </Link>

        <div>

          {product.regular_price !== product.actual_price ? (
            <>
              <span className="oldPrice">{product.regular_price}</span>

              <span>{product.actual_price}</span>

            </>
          ) : product.regular_price}

        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
