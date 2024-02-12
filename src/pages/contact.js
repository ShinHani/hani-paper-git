import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import GoToHomeButton from '../components/gotohome/gotohome.js';
import InstagramNews from '../components/selfinsta/selfinsta.js';
import ContactInfo from '../components/contact/contactinfo.js';

/* Scss */
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <div class="fh5co-loader"></div> */}

        <div id="page">
            <Header />
            <ContactInfo />
            <InstagramNews />
            <Footer />
            <GoToHomeButton />
        </div>
    </>
);