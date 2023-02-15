import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu2 = () => {
  const arr = [
    { title: 'Закуски', url: '../zakuski' },
    { title: 'Салаты', url: '../salat' },
    { title: 'Денер кебаб', url: '../dener' },
    { title: 'Гирос', url: '../giros' },
    { title: 'Дюрум', url: '../durum' },
    { title: 'Хот-доги', url: '../hot-dog' },
    { title: 'Комбо сеты', url: '../comboset' },
    { title: 'Роллы сеты', url: '../sushiset' },
    { title: 'Соусы', url: '../sous' },
    { title: 'Напитки', url: '../napitki' },
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
