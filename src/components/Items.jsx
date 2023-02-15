import React from 'react';
import arr from './Arrays';

const Items = () => {
  const arr = [
    {
      title: 'С курицей',
      imageUrl: '../img/sh_kur.jpg',
      weight: '380 г.',
      ingredients: 'Капуста, корейская морковь, соленый огурец, помидор, чесночный соус',
      price: '150',
    },
    {
      title: 'С говядиной',
      imageUrl: '../img/sh_gov.jpg',
      weight: '380 г.',
      ingredients: 'Капуста, корейская морковь, свежий огурец, помидор, чесночный соус',
      price: '200',
    },
  ];

  return (
    <div class="content__items">
      <img src="../img/sh_kur.jpg" alt="Шаурма с курицей" />
      <div class="info__wrap">
        <div class="h2">
          <h2>{arr[0].title}</h2>
        </div>
        <div class="weight">
          <span>{arr[0].weight}</span>
        </div>
        <div class="ingredients">
          <span>{arr[0].ingredients}</span>
        </div>
        <div class="price">
          <p>Цена:</p>
          <p>150 руб.</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
