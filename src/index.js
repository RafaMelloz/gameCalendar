import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './templates/home';
import { Game } from './templates/game';
import { TopLogo } from './components/TopLogo';
import { GameContext } from './context';
import { Page404 } from './templates/page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopLogo/>

      <GameContext>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='/game/:id' element={<Game />} />


          <Route path="*" element={<Page404 />} />
        </Routes>

      </GameContext> 
    </BrowserRouter>
  </React.StrictMode>
);
