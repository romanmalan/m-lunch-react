import React from 'react';
import Menu2 from '../components/Menu2';

const Durum = () => {
  return (
    <>
      <div class="body_shaurma"></div>
      <Menu2 />
      <h1>
        <span>Дюрум</span>
      </h1>
      <div class="content__container">
        <div class="content__items">
          <img src="../m-lunch-react/img/Dyurum_kur.jpg" alt="С курицей" />
          <div class="info__wrap">
            <div class="h2">
              <h2>С курицей</h2>
            </div>
            <div class="weight">
              <span>380 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Фри соломка, соленый огурец, салат/пекин.капуста по наличию, помидоры, перец
                сладкий, томатный соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>180 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../m-lunch-react/img/Dyurum_gov.jpg" alt="С говядиной" />
          <div class="info__wrap">
            <div class="h2">
              <h2>С говядиной</h2>
            </div>
            <div class="weight">
              <span>380 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Фри соломка, соленый огурец, салат/пекин.капуста по наличию, помидоры, перец
                сладкий, томатный соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>210 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Durum;
