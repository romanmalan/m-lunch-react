import React from 'react';
import Menu2 from '../components/Menu2';

const Comboset = () => {
  return (
    <div className="body_burger">
      <Menu2 />
      <h1>
        <span>Комбо-сеты</span>
      </h1>
      <div class="content__container">
        <img width="880" src="../m-lunch-react/img/cset1.jpg" alt="cset1" />
        <img width="880" src="../m-lunch-react/img/cset2.jpg" alt="cset2" />
        <img width="880" src="../m-lunch-react/img/cset3.jpg" alt="cset3" />
        <img width="880" src="../m-lunch-react/img/cset4.jpg" alt="cset4" />
        <img width="880" src="../m-lunch-react/img/cset5.jpg" alt="cset5" />
      </div>
    </div>
  );
};

export default Comboset;
