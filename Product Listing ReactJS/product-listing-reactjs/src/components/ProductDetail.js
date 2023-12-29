import React from 'react';
import { useParams } from 'react-router-dom';
import noon from '../images/noon.jpg';
import flipkart from '../images/flipkart.jpg';
import amazon from '../images/amazon.png';
import whatsapp from '../images/whatsapp.jpg';
import bag from '../images/bag.png';
import heart from '../images/heart.jpg';
import luminous from '../images/luminous.png';

const ProductDetail = ({ products }) => {

  const { id } = useParams();
  const textStyle = {
    marginLeft: '20px'
  };

  if (!products) {
    return <div>Loading...</div>; // You can handle the loading state appropriately
  }

  const product = products.find((p) => p.id === parseInt(id));

  // Check if the product is defined before accessing its properties
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="App detail-page">
      <div className="row product-section">
        <div class="col-md-6">
          <div className="row">
            <img src={product.image} alt={product.name} className="cover-image" />
          </div>
          <div className="row ">
            <div className="col-md-3"><img src={product.image} alt={product.name} className="srcimg" /></div>
            <div className="col-md-3"><img src={product.image} alt={product.name} className="srcimg" /></div>
            <div className="col-md-3"><img src={product.image} alt={product.name} className="srcimg" /></div>
            <div className="col-md-3"><img src={product.image} alt={product.name} className="srcimg" /></div>
          </div>
        </div>
        <div className="col-md-6 product-info">
          <div className="row custom-margin">
            <div className="col-md-5 offer-section">
              10% Newyear Offer
            </div>
            <div className="col-md-6 luminous">
              <img src={luminous} alt={luminous} className="lumimg" />
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-md-9 product-name">
              {product.name}
            </div>
            <div className="col-md-3">
              <img src={heart} alt={heart} className="icons" />
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-md-4 offer-section1">Selling out fast</div>
            <div className="col-md-3 offer-section2" style={textStyle} >Best in UAE</div>
          </div>
          <div className="row custom-margin">
            <div className='col-md-4'>
              <div className="row names">Capacity:</div>
              <div className="row details">{product.capacity}</div>
            </div>
            <div className='col-md-4'>
              <div className="row names">Warranty:</div>
              <div className="row details">{product.warranty}</div>
            </div>
            <div className='col-md-4'>
              <div className="row names">Price:</div>
              <div className="row details">Wholesale Only</div>
            </div>
          </div>
          <div className="row custom-margin">
            <div className='col-md-9'>
              <div class="row details">Price Inclusive of VAT:</div>
              <div className="row price">{product.price} AED</div>
            </div>
            <div className="col-md-3">
              <img src={bag} alt={bag} className="icons" />
            </div>
          </div>
          <div className="row custom-margin">
            <div className="row details">
              Also available on
            </div>
            <div className="row">
              <div className="col-md-3">
                <img src={noon} alt={noon} className="icons" />
              </div>
              <div className="col-md-3">
                <img src={amazon} alt={amazon} className="icons" />
              </div>
              <div className="col-md-3">
                <img src={flipkart} alt={flipkart} className="icons" />
              </div>
              <div className="col-md-3">
                <img src={whatsapp} alt={whatsapp} className="icons" />
              </div>
            </div>
          </div>
          <div className="row description">
            {product.description}
          </div>
          <div className="buy-now-section custom-margin">
            <h3>Buy now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;