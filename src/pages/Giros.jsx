import React from 'react';
import Menu2 from '../components/Menu2';

const Giros = () => {
  return (
    <>
      <div class="body_shaurma">
        <Menu2 />
        <h1>
          <span>Гирос</span>
        </h1>
        <div class="content__container">
          <div class="content__items">
            <img src="../m-lunch-react/img/giros_kur.jpg" alt="С курицей" />
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
            <img src="../m-lunch-react/img/giros_gov.jpg" alt="С говядиной" />
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
      </div>
    </>
  );
};

export default Giros;
