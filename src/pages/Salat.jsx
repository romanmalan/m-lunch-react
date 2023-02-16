import React from 'react';
import Menu2 from '../components/Menu2';

const Salat = () => {
  return (
    <>
      <Menu2 />
      <h1>
        <span>Салаты</span>
      </h1>
      <div class="content__container">
        <div class="content__items">
          <img src="../m-lunch-react/img/salat_cezar.jpg" alt="Цезарь" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Цезарь</h2>
            </div>
            <div class="weight">
              <span>150 г.</span>
            </div>
            <div class="ingredients">
              <span>Пекинская капуста, куриная грудка, помидоры, сыр, соус белый, сухарики</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>100 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../m-lunch-react/img/salat_vera.jpg" alt="Вера" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Вера</h2>
            </div>
            <div class="weight">
              <span>150 г.</span>
            </div>
            <div class="ingredients">
              <span>Морковь по-корейски, сол. огурец, колбаса с/к, кукуруза, майонез</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>100 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salat;
