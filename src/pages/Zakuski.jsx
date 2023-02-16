import React from 'react';
import Menu2 from '../components/Menu2';

const Zakuski = () => {
  return (
    <div class="body_zakuski">
      <Menu2 />
      <h1>
        <span>Закуски</span>
      </h1>
      <div class="content__container">
        <div class="content__items" id="short-item">
          <img src="../m-lunch-react/img/zakus_ring.jpg" alt="Луковые кольца" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Луковые кольца</h2>
            </div>
            <div class="weight">
              <span>100 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>110 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../m-lunch-react/img/zakus_free.jpg" alt="Картошка фри" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Картошка фри</h2>
            </div>
            <div class="weight">
              <span>100 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>100 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../m-lunch-react/img/zakus_nuggets.jpg" alt="Наггетсы" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Наггетсы</h2>
            </div>
            <div class="weight">
              <span>100 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>130 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../m-lunch-react/img/zakus_potato.jpg" alt="Картофель по деревенски" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Картофель по деревенски</h2>
            </div>
            <div class="weight">
              <span>130 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>120 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../m-lunch-react/img/zakus_kroket.jpg" alt="Крокеты" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Крокеты</h2>
            </div>
            <div class="weight">
              <span>120 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>110 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zakuski;
