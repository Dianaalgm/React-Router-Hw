import React from 'react';

const ProductInfo = ({ match }) => {
  return (
    <div>
      <h3>Product ID: {match.params.id}</h3>
      <p>Product details here...</p>
    </div>
  );
};

export default ProductInfo;