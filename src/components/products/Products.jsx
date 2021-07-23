import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/index';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.table(products);
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            style={{
              maxHeight: '400px',
              maxWidth: '400px',
            }}
            alt=''
          />
          <h4>{product.title}</h4>
          <p>{product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
