import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Home from './pages/Home';
import Shaurma from './pages/Shaurma';
import Header from './components/Header';
import Footer from './components/Footer';
import Advantages from './components/Advantages';
//import Items from './components/Items';
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
            <Route path="/" element={<Home />} />
            <Route path="/shaurma" element={<Shaurma />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/sushi" element={<Sushi />} />
            <Route path="/zakuski" element={<Zakuski />} />
            <Route path="/salat" element={<Salat />} />
            <Route path="/dener" element={<Dener />} />
            <Route path="/giros" element={<Giros />} />
            <Route path="/durum" element={<Durum />} />
            <Route path="/hot-dog" element={<Hotdog />} />
            <Route path="/comboset" element={<Comboset />} />
            <Route path="/sushiset" element={<Sushiset />} />
            <Route path="/sous" element={<Sous />} />
            <Route path="/napitki" element={<Napitki />} />
            <Route path="/promo" element={<Promo />} />
          </Routes>
        </Wrapper>
        <Advantages />
      </div>
      <Footer />
    </>
  );
}

export default App;
