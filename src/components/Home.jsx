import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products'
import './Home.css'

const Home = () => {
  return (
    <div className='top'>
    <h2>My Online Store<FontAwesomeIcon icon={faShoppingBasket} spin /> </h2>
    <main>
        <p>Check out our wide selection of products!</p>
      </main>
    <div className='products'>
      <Products></Products>
    </div>
    </div>
  )
}

export default Home