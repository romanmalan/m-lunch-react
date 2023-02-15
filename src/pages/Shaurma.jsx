import React from 'react';
import Menu2 from '../components/Menu2';
//import Items from '../components/Items';

const Shaurma = () => {
  return (
    <div class="body_shaurma">
      <Menu2 />
      <h1>
        <span>Шаурма</span>
      </h1>
      <div class="content__container">
        <div class="content__items">
          <img src="../img/sh_kur.jpg" alt="Шаурма с курицей" />
          <div class="info__wrap">
            <div class="h2">
              <h2>С курицей</h2>
            </div>
            <div class="weight">
              <span>380 г.</span>
            </div>
            <div class="ingredients">
              <span>Капуста, корейская морковь, соленый огурец, помидор, чесночный соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>150 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/sh_gov.jpg" alt="Шаурма с говядиной" />
          <div class="info__wrap">
            <div class="h2">
              <h2>С говядиной</h2>
            </div>
            <div class="weight">
              <span>380 г.</span>
            </div>
            <div class="ingredients">
              <span>Капуста, корейская морковь, свежий огурец, помидор, чесночный соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>200 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/sh_zurna.jpg" alt="Зурна с курицей" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Зурна с курицей</h2>
            </div>
            <div class="weight">
              <span>700 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Салат/пекин.капуста по наличию, лук, помидор, сол. огурец, перец сладкий,
                сметанно-чесночный соус, томатный соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>320 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/sh_zurna.jpg" alt="Зурна с говядиной" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Зурна с говядиной</h2>
            </div>
            <div class="weight">
              <span>700 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Салат/пекин.капуста по наличию, лук, помидор, сол. огурец, перец сладкий,
                сметанно-чесночный соус, томатный соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>400 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/1free.jpg" alt="доп. Картошка фри" />
          <div class="info__wrap">
            <div class="h2">
              <h2>доп. Картошка фри</h2>
            </div>
            <div class="weight">
              <span>40 г.</span>
            </div>
            <div class="ingredients">
              <span>Дополнительный картофель фри в шаурму или зурну</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>35 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/sh_cheese.jpg" alt="" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Голландский сыр</h2>
            </div>
            <div class="weight">
              <span>40 г.</span>
            </div>
            <div class="ingredients">
              <span>Дополнительный Голландский сыр в шаурму или зурну</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>35 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shaurma;
