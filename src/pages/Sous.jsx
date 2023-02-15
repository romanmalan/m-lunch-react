import React from 'react';
import Menu2 from '../components/Menu2';

const Sous = () => {
  return (
    <div className="body_burger">
      <Menu2 />
      <h1>
        <span>Соусы</span>
      </h1>
      <div class="content__container">
        <div class="content__items" id="short-item">
          <img src="../img/sous1.jpg" alt="Сырный Heinz" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Сырный Heinz</h2>
            </div>
            <div class="weight">
              <span>25 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous2.jpg" alt="Барбекью Heinz" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Барбекью Heinz</h2>
            </div>
            <div class="weight">
              <span>25 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous3.jpg " alt="Чесночный Heinz" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Чесночный Heinz</h2>
            </div>
            <div class="weight">
              <span>25 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous4.jpg " alt="Соевый соус" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Соевый соус</h2>
            </div>
            <div class="weight">
              <span>30 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous5.jpg" alt='Соус спайси "острый"' />
          <div class="info__wrap">
            <div class="h2">
              <h2>Соус спайси "острый"</h2>
            </div>
            <div class="weight">
              <span>30 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>25 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous6.jpg " alt="Сливочно-чесночный" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Сливочно-чесночный</h2>
            </div>
            <div class="weight">
              <span>30 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>25 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous7.jpg" alt="Имбирь маринованный" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Имбирь маринованный</h2>
            </div>
            <div class="weight">
              <span>30 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items" id="short-item">
          <img src="../img/sous8.jpg" alt="Васаби" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Васаби</h2>
            </div>
            <div class="weight">
              <span>30 г.</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>20 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sous;
