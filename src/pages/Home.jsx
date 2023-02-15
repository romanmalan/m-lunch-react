import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="slider-wrap">
        <div id="active-slide">
          <div id="slider">
            <div class="slide">
              <img src="/img/slide2.jpg" alt="slide" />
            </div>
            <div class="slide">
              <img src="/img/slide3.jpg" alt="slide" />
            </div>

            <div class="slide">
              <img src="/img/slide5.jpg" alt="slide" />
            </div>
            <div class="slide">
              <img src="/img/slide6.jpg" alt="slide" />
            </div>
            <div class="slide">
              <img src="/img/slide7.jpg" alt="slide" />
            </div>
            <div class="slide">
              <img src="/img/slide8.jpg" alt="slide" />
            </div>

            <div class="slide">
              <img src="/img/slide14.jpg" alt="slide" />
            </div>
          </div>
        </div>
      </div>
      <div class="category__container">
        <Link to="/pizza" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Pizza_large.png"
                  alt="Пицца"
                />
              </div>
            </div>
            <div class="category__name">Пицца</div>
          </div>
        </Link>
        <Link to="./shaurma/" Шаурма class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Doner_large.png"
                  alt="Шаурма"
                />
              </div>
            </div>
            <div class="category__name">Шаурма</div>
          </div>
        </Link>
        <Link to="/sushi" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Sushi_large.png"
                  alt="Суши Роллы"
                />
              </div>
            </div>
            <div class="category__name">Роллы</div>
          </div>
        </Link>
        <Link to="/burger" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Burgers_large.png"
                  alt="Бургеры"
                />
              </div>
            </div>
            <div class="category__name">Бургеры</div>
          </div>
        </Link>
        <Link to="/hot-dog" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Hot-dog_large.png"
                  alt="Хот-доги"
                />
              </div>
            </div>
            <div class="category__name">Хот-доги</div>
          </div>
        </Link>
      </div>
      <div class="category__container">
        <Link to="/comboset" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Kombo_large.png"
                  alt="Комбо сеты"
                />
              </div>
            </div>
            <div class="category__name">Комбо сеты</div>
          </div>
        </Link>
        <Link to="/sushiset" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Set_large.png"
                  alt="Суши сеты"
                />
              </div>
            </div>
            <div class="category__name">Роллы сеты</div>
          </div>
        </Link>
        <Link to="/durum" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Durum_large.png"
                  alt="Дюрум"
                />
              </div>
            </div>
            <div class="category__name">Дюрум</div>
          </div>
        </Link>
        <Link to="/giros" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Giros_large.png"
                  alt="Гирос"
                />
              </div>
            </div>
            <div class="category__name">Гирос</div>
          </div>
        </Link>
        <Link to="/dener" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Kebab_large.png"
                  alt="Денер кебаб"
                />
              </div>
            </div>
            <div class="category__name">Денер кебаб</div>
          </div>
        </Link>
      </div>
      <div class="category__container">
        <Link to="/zakuski" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Zakuski_large.png"
                  alt="Закуски"
                />
              </div>
            </div>
            <div class="category__name">Закуски</div>
          </div>
        </Link>
        <Link to="/salat" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Salat_large.png"
                  alt="Салаты"
                />
              </div>
            </div>
            <div class="category__name">Салаты</div>
          </div>
        </Link>
        <Link to="/napitki" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Drink_large.png"
                  alt="Напитки"
                />
              </div>
            </div>
            <div class="category__name">Напитки</div>
          </div>
        </Link>
        <Link to="/sous" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Sous_large.png"
                  alt="Соусы"
                />
              </div>
            </div>
            <div class="category__name">Соусы</div>
          </div>
        </Link>
        <Link to="/promo" class="category__item">
          <div class="category__content">
            <div class="category__image">
              <div class="lazy-image">
                <img
                  class="lazy-image__img lazy-image__img_large lazy-image__img_loaded"
                  src="/img/Promo_large.png"
                  alt="Акции"
                />
              </div>
            </div>
            <div class="category__name">Акции</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
