import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { InviteApp } from './InviteApp.jsx';

import './assets/css/fonts.css';
import './index.css';
import './assets/css/mobile.css';
import './assets/css/tablet.css';
import './assets/css/desktop.css';
import './assets/css/wave.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InviteApp />
    </BrowserRouter>
  </React.StrictMode>,
)
