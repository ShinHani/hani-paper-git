import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import GoToHomeButton from '../components/gotohome/gotohome.js';
import InstagramNews from '../components/selfinsta/selfinsta.js';
import BlogContent from '../components/blog/blogcontent.js';

/* Scss */
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <div class="fh5co-loader"></div> */}

        <div id="page">
            <Header />
            <BlogContent />
            <InstagramNews />
            <Footer />
            <GoToHomeButton />
        </div>
    </>
);