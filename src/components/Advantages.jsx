import React from 'react';

const Advantages = () => {
  return (
    <div class="advantages-section">
      <div class="advantages-container">
        <div class="advantages-text">
          <h2>Почему лучше сделать заказ у нас?</h2>
          <div class="span">
            <span>
              -Только свежие и качественные продукты! -Широкий ассортимент блюд в одном месте. Вы
              всегда сможете заказать у нас роллы, пиццу, шаурму, хот-доги, бургеры.
              <br />
              -Наша дружная команда приготовит ваш заказ быстро и вкусно.
              <br />
              -Наши курьеры осуществят доставку в кратчайшие сроки!
              <br />
              -Бесплатная доставка от 500рублей по г.Гай
            </span>
          </div>
        </div>
        <div class="advantages-image">
          <img src="./img/advantages.png" alt="advantages" />
          <div class="advantages-hours">
            <h3>Режим работы</h3>
            <p>
              с 11:00 до 24:00
              <br />
              без выходных
            </p>
            <span>
              +7 909 618-81-81
              <br />
              +7 922 818-81-81
            </span>
          </div>
        </div>
      </div>
      <div class="icons-container">
        <div class="icons">
          <img src="./img/haltura.jpg" alt="вкусно быстро недорого" />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
