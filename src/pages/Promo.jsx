import React from 'react';
import Menu2 from '../components/Menu2';

const Promo = () => {
  return (
    <>
      <Menu2 />
      <h1>
        <span>Акции</span>
      </h1>
      <div class="content__container">
        <img width="880" src="../img/promo1.jpg" alt="promo1" />
        <img width="880" src="../img/promo2.jpg" alt="promo2" />
        <img width="880" src="../img/promo3.jpg" alt="promo3" />
        <img width="880" src="../img/promo4.jpg" alt="promo4" />
      </div>
    </>
  );
};

export default Promo;
