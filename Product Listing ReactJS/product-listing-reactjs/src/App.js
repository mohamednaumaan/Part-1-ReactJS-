import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';

function App() {
  const products = [
    {
      id: 1,
      name: 'Luminous GPTTEX 240 AH',
      image: pic1,
      price: 49.99,
      capacity: '35AH',
      warranty: '3yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
    {
      id: 2,
      name: 'Luminous 24v Deep Cycle Battery',
      image: pic2,
      price: 69.99,
      capacity: '45AH',
      warranty: '4yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
    {
      id: 3,
      name: 'Luminous 60Ah 12v Battery',
      image: pic3,
      price: 54.99,
      capacity: '55AH',
      warranty: '5yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
    {
      id: 4,
      name: 'Luminous 120Ah 24v Battery',
      image: pic4,
      price: 99.99,
      capacity: '25AH',
      warranty: '2yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
    {
      id: 5,
      name: 'Luminous 50Ah 12v Battery',
      image: pic5,
      price: 42.99,
      capacity: '15AH',
      warranty: '1yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
    {
      id: 6,
      name: 'Luminous 100Ah 24v Battery',
      image: pic6,
      price: 79.99,
      capacity: '30AH',
      warranty: '2yrs',
      description: 'Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, and residential solar space.With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.'
    },
  ];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
