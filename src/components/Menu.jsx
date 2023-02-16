import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const arr = [
    { title: 'Пицца', url: 'm-lunch-react/pizza' },
    { title: 'Шаурма', url: 'm-lunch-react/shaurma' },
    { title: 'Роллы', url: 'm-lunch-react/sushi' },
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
