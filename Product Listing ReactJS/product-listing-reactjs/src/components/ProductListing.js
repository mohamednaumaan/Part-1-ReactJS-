import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductListing.css';

const ProductListing = ({ products }) => {
  return (
    <div className="main">
      <header>
        <div className="left">Batteries</div>
        <div className="right">View All Batteries</div>
      </header>
      <div className="product-listing">
        {products.map((product) => (
          <Link className="link" key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;