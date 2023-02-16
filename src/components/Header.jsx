import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <div id="wrapper-header">
        <div id="logo">
          <Link to="/m-lunch-react">
            <img src="../m-lunch-react/img/logo2.png" alt="M-lunch" />
          </Link>
        </div>
        <div className="city-cont">
          <span className="city">Гай</span>
        </div>
        <Menu />
        <div id="numbers__time" class="numbers__time">
          <div class="social_numbers">
            <div id="social">
              <a href="https://vk.com/public200607121" class="social-icon vk">
                {' '}
              </a>
              <a href="https://instagram.com/m_lunch_vgae" class="social-icon instagram">
                {' '}
              </a>
            </div>
            <div id="numbers">
              <a href="tel:+79096188181">
                <img
                  className="phone_icon"
                  alt="telicon"
                  src="../m-lunch-react/img/phone_icon.png"
                  width="20"
                  height="20"></img>
                <div>8 909-618-81-81</div>
              </a>
              <a href="tel:+79228188181">
                <img
                  className="phone_icon2"
                  alt="telicon"
                  src="../m-lunch-react/img/phone_icon.png"
                  width="20"
                  height="20"></img>
                <div>8 922-818-81-81</div>
              </a>
            </div>
          </div>
          <div id="time">
            <div>Доставка с 11:00 до 24:00 без выходных</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
