import React from 'react';
import Menu2 from '../components/Menu2';

function Pizza() {
  return (
    <>
      <div class="body_pizza">
        <Menu2 />
        <h1>
          <span>Пицца</span>
        </h1>
        <div class="content__container">
          <img width="880" src="../m-lunch-react/img/pizza1.jpg" alt="pizza1" />
          <img width="880" src="../m-lunch-react/img/pizza2.jpg" alt="pizza2" />
          <img width="880" src="../m-lunch-react/img/pizza3.jpg" alt="pizza3" />
        </div>
      </div>
    </>
  );
}

export default Pizza;
