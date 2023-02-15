import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const arr = [
    { title: 'Пицца', url: '../pizza' },
    { title: 'Шаурма', url: '../shaurma' },
    { title: 'Роллы', url: '../sushi' },
    { title: 'Бургеры', url: '../burger' },
  ];

  const location = useLocation();

  return (
    <nav>
      <ul class="top-menu">
        {arr.map((obj) => (
          <li>
            <Link to={obj.url} className={obj.url === '..' + location.pathname ? 'active' : ''}>
              {obj.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
