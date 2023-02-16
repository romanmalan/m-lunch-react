import React from 'react';
import Menu2 from '../components/Menu2';

const Sushiset = () => {
  return (
    <div class="body_sushi">
      <Menu2 />
      <h1>
        <span>Роллы сеты</span>
      </h1>
      <div class="content__container">
        <img width="880px" src="../m-lunch-react/img/sset1.jpg" alt="sset1" />
        <img width="880px" src="../m-lunch-react/img/sset2.jpg" alt="sset2" />
        <img width="880px" src="../m-lunch-react/img/sset3.jpg" alt="sset3" />
      </div>
    </div>
  );
};

export default Sushiset;
