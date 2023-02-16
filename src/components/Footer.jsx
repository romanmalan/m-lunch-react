import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="numbers__time__footer">
          <div id="numbers" className="numbers-foot">
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
          <div id="time">
            <p>Доставка: с 11:00 до 24:00 без выходных</p>
            <p></p>
          </div>
        </div>
        <div class="logo__year__footer">
          <div class="logo__footer">
            <a href="./">
              <img src="./m-lunch-react/img/logo.png" alt="M-lunch" />
            </a>
          </div>
          <div class="year">
            <p>2023г.</p>
          </div>
        </div>
        <div class="adress__social">
          <div class="adress">
            <p>г. Гай, ул. Ленина 43 | Cafe Club "M-Lunch"</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
