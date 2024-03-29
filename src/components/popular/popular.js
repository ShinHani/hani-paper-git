import React from 'react';
import './module.scss';

class Populars extends React.Component {
    render() {
        return (
            <div id="fh5co-blog-popular">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-12 col-md-offset-0 text-center fh5co-heading">
                            <h2><span>Popular Post</span></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="fh5co-blog animate-box">
                                <a href="#"></a>
                                <div class="blog-text">
                                    <h3><a href="#">Conquer The World</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-blog animate-box">
                                <a href="#"></a>
                                <div class="blog-text">
                                    <h3><a href="#">List Minimal Design</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-blog animate-box">
                                <a href="#"></a>
                                <div class="blog-text">
                                    <h3><a href="#">Modeling Spotted</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fh5co-blog animate-box">
                                <a href="#"></a>
                                <div class="blog-text">
                                    <h3><a href="#">Around The World</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Populars;