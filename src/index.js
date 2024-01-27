import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header.js';

/* Scss */
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <div class="fh5co-loader"></div> */}

    <div id="page">
      <Header />
    </div>
  </>
);