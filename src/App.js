import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Advantages from './components/Advantages';
//import Items from './components/Items';
import Home from './pages/Home';
import Shaurma from './pages/Shaurma';
import Pizza from './pages/Pizza';
import Burger from './pages/Burger';
import Sushi from './pages/Sushi';
import Zakuski from './pages/Zakuski';
import Salat from './pages/Salat';
import Dener from './pages/Dener';
import Giros from './pages/Giros';
import Durum from './pages/Durum ';
import Hotdog from './pages/Hotdog';
import Comboset from './pages/Comboset';
import Sushiset from './pages/Sushiset';
import Sous from './pages/Sous';
import Napitki from './pages/Napitki';
import Promo from './pages/Promo';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <Wrapper>
          <Routes>
            <Route path="m-lunch-react/" element={<Home />} />
            <Route path="m-lunch-react/shaurma" element={<Shaurma />} />
            <Route path="m-lunch-react/pizza" element={<Pizza />} />
            <Route path="m-lunch-react/burger" element={<Burger />} />
            <Route path="m-lunch-react/sushi" element={<Sushi />} />
            <Route path="m-lunch-react/zakuski" element={<Zakuski />} />
            <Route path="m-lunch-react/salat" element={<Salat />} />
            <Route path="m-lunch-react/dener" element={<Dener />} />
            <Route path="m-lunch-react/giros" element={<Giros />} />
            <Route path="m-lunch-react/durum" element={<Durum />} />
            <Route path="m-lunch-react/hot-dog" element={<Hotdog />} />
            <Route path="m-lunch-react/comboset" element={<Comboset />} />
            <Route path="m-lunch-react/sushiset" element={<Sushiset />} />
            <Route path="m-lunch-react/sous" element={<Sous />} />
            <Route path="m-lunch-react/napitki" element={<Napitki />} />
            <Route path="m-lunch-react/promo" element={<Promo />} />
          </Routes>
        </Wrapper>
        <Advantages />
      </div>
      <Footer />
    </>
  );
}

export default App;
