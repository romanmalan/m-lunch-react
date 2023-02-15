import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="numbers__time__footer">
          <div id="numbers">
            <p>7 909 618 81 81</p>
            <p>7 922 818 81 81</p>
          </div>
          <div id="time">
            <p>Доставка: с 11:00 до 24:00 без выходных</p>
            <p></p>
          </div>
        </div>
        <div class="logo__year__footer">
          <div class="logo__footer">
            <a href="./">
              <img src="./img/logo.png" alt="M-lunch" />
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
          <div id="social">
            <a href="https://vk.com/public200607121" class="social-icon vk"></a>
            <a href="https://instagram.com/m_lunch_vgae" class="social-icon instagram"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
