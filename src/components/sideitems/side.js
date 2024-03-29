import React from 'react';
import './module.scss';

class SideItems extends React.Component {
    render() {
        return (
            <aside id="fh5co-hero">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="flexslider animate-box">
                                <ul class="slides">
                                    <li>
                                        <div class="overlay-gradient"></div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-10 col-md-offset-1 slider-text">
                                                    <div class="slider-text-inner">
                                                        <h1>Not Every Project Needs To Be Perfect</h1>
                                                        <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
                                                        <p class="ct"><a href="#">Learn More <i class="icon-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="overlay-gradient"></div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-10 col-md-offset-1 slider-text">
                                                    <div class="slider-text-inner">
                                                        <h1>Minimal &amp; Clean Blog WordPress</h1>
                                                        <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
                                                        <p class="ct"><a href="#">Learn More <i class="icon-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="overlay-gradient"></div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-10 col-md-offset-1 slider-text">
                                                    <div class="slider-text-inner">
                                                        <h1>What Would You Like To Learn?</h1>
                                                        <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
                                                        <p class="ct"><a href="#">Learn More <i class="icon-arrow-right"></i></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href="#" class="featured text-center animate-box">
                                <div class="desc">
                                    <span class="date">Dec 25, 2016</span>
                                    <h3>Every Start has an End</h3>
                                    <span class="category">Inspirational</span>
                                </div>
                            </a>
                            <a href="#" class="featured text-center animate-box">
                                <div class="desc">
                                    <span class="date">Dec 25, 2016</span>
                                    <h3>Most Beautiful Website in 2016</h3>
                                    <span class="category">Inspirational</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}
export default SideItems;