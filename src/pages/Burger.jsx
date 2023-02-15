import React from 'react';
import Menu2 from '../components/Menu2';

const Burger = () => {
  return (
    <div className="body_burger">
      <Menu2 />
      <h1>
        <span>Бургеры</span>
      </h1>
      <div class="content__container">
        <div class="content__items">
          <img src="../img/gamburger.jpg" alt="gamburger" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Гамбургер</h2>
            </div>
            <div class="weight">
              <span>155 гр.</span>
            </div>
            <div class="ingredients">
              <span>Булочка, говяжья котлета, соленый огурец, лук, соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>85 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/chikenburger.jpg" alt="chikenburger" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Чикенбургер</h2>
            </div>
            <div class="weight">
              <span>155 гр.</span>
            </div>
            <div class="ingredients">
              <span>Булочка, куриная котлета, салат, соленый огурец, лук, соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>80 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/cheeseburger.jpg " alt="cheeseburger" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Чизбургер</h2>
            </div>
            <div class="weight">
              <span>180 гр.</span>
            </div>
            <div class="ingredients">
              <span>Булочка, говяжья котлета, сыр, помидор, салат, соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>105 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/chikencheese.jpg " alt="chikencheese" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Чикен чиз</h2>
            </div>
            <div class="weight">
              <span>180 гр.</span>
            </div>
            <div class="ingredients">
              <span>Булочка, куриная котлета, сыр, соленый огурец, помидор, салат, соус</span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>100 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/vesnagov.jpg" alt="vesnagov" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Весна с говядиной</h2>
            </div>
            <div class="weight">
              <span>200 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Булочка, говяжья котлета, сыр Моцарелла, свежий огурец, помидор, салат, соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>120 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/vesnakur.jpg " alt="vesnakur" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Весна с курицей</h2>
            </div>
            <div class="weight">
              <span>200 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Булочка, куриная котлета, сыр Моцарелла, соленый огурец, помидор, салат, соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>115 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/bigcheese.jpg " alt="bigcheese" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Биг чиз</h2>
            </div>
            <div class="weight">
              <span>300 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Булочка, говяжья котлета, сыр Моцарелла, сыр голландский, соленый огурец, помидор,
                салат, соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>235 руб.</p>
            </div>
          </div>
        </div>
        <div class="content__items">
          <img src="../img/burgeregg.jpg " alt="burgeregg" />
          <div class="info__wrap">
            <div class="h2">
              <h2>Бургер с яйцом</h2>
            </div>
            <div class="weight">
              <span>300 г.</span>
            </div>
            <div class="ingredients">
              <span>
                Булочка, говяжья котлета, сыр Моцарелла, сыр голландский, глазунья, помидор, салат,
                соус
              </span>
            </div>
            <div class="price">
              <p>Цена:</p>
              <p>255 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
