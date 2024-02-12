import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import GoToHomeButton from './components/gotohome/gotohome.js';
import SideItems from './components/sideitems/side.js';
import Populars from './components/popular/popular.js';
import MainContent from './components/maincontent/contents.js';
import InstagramNews from './components/selfinsta/selfinsta.js';

/* Scss */
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <div class="fh5co-loader"></div> */}

    <div id="page">
      <Header />
      <SideItems />
      <Populars />
      <MainContent />
      <InstagramNews />
      <Footer />
      <GoToHomeButton />
    </div>
  </>
);