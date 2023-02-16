import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu2 = () => {
  const arr = [
    { title: 'Бургеры', url: '../m-lunch-react/burger' },
    { title: 'Хот-доги', url: '../m-lunch-react/hot-dog' },
    { title: 'Закуски', url: '../m-lunch-react/zakuski' },
    { title: 'Салаты', url: '../m-lunch-react/salat' },
    { title: 'Дюрум', url: '../m-lunch-react/durum' },
    { title: 'Гирос', url: '../m-lunch-react/giros' },
    { title: 'Денер кебаб', url: '../m-lunch-react/dener' },
    { title: 'Комбо сеты', url: '../m-lunch-react/comboset' },
    { title: 'Роллы сеты', url: '../m-lunch-react/sushiset' },
    { title: 'Напитки', url: '../m-lunch-react/napitki' },
    { title: 'Соусы', url: '../m-lunch-react/sous' },
  ];

  const location = useLocation();

  return (
    <div class="menu2__wrap">
      {arr
        .filter((obj) => obj.url !== '..' + location.pathname)
        .map((obj) => (
          <Link to={obj.url} class="menu2 menu2__burger">
            {obj.title}
          </Link>
        ))}
    </div>
  );
};

export default Menu2;
