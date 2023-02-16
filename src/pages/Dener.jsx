import React from 'react';
import Menu2 from '../components/Menu2';

const Dener = () => {
  return (
    <>
      <div class="body_shaurma">
        <Menu2 />
        <h1>
          <span>Денер кебаб</span>
        </h1>
        <div class="content__container">
          <div class="content__items">
            <img src="../m-lunch-react/img/dener_kur.jpg" alt="С курицей" />
            <div class="info__wrap">
              <div class="h2">
                <h2>С курицей</h2>
              </div>
              <div class="weight">
                <span>330 г.</span>
              </div>
              <div class="ingredients">
                <span>Турецкая лепешка, лук, помидор, картофель фри, зелень, соленый огурец</span>
              </div>
              <div class="price">
                <p>Цена:</p>
                <p>170 руб.</p>
              </div>
            </div>
          </div>
          <div class="content__items">
            <img src="../m-lunch-react/img/dener_gov.jpg" alt="С говядиной" />
            <div class="info__wrap">
              <div class="h2">
                <h2>С говядиной</h2>
              </div>
              <div class="weight">
                <span>330 г.</span>
              </div>
              <div class="ingredients">
                <span>Турецкая лепешка, лук, помидор, картофель фри, зелень, соленый огурец</span>
              </div>
              <div class="price">
                <p>Цена:</p>
                <p>190 руб.</p>
              </div>
            </div>
          </div>
          <div class="content__items">
            <img src="../m-lunch-react/img/denerbox_kur.jpg" alt="Ланчбокс с курицей" />
            <div class="info__wrap">
              <div class="h2">
                <h2>Ланчбокс с курицей</h2>
              </div>
              <div class="weight">
                <span>350 г.</span>
              </div>
              <div class="ingredients">
                <span>Курица, картофель фри, огурец, помидор, томатный соус</span>
              </div>
              <div class="price">
                <p>Цена:</p>
                <p>250 руб.</p>
              </div>
            </div>
          </div>
          <div class="content__items">
            <img src="../m-lunch-react/img/denerbox_gov.jpg" alt="Ланчбокс с говядиной" />
            <div class="info__wrap">
              <div class="h2">
                <h2>Ланчбокс с говядиной</h2>
              </div>
              <div class="weight">
                <span>350 г.</span>
              </div>
              <div class="ingredients">
                <span>Говядина, картофель фри, огурец, помидор, томатный соус</span>
              </div>
              <div class="price">
                <p>Цена:</p>
                <p>270 руб.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dener;
