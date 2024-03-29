import React from 'react';
import './module.scss';
class InstagramNews extends React.Component {
    render() {
        return (
            <div id="fh5co-instagram">
                <div class="container">
                    <div class="row animate-box">
                        <div class="col-md-12 col-md-offset-0 text-center fh5co-heading">
                            <h2><span>Instagram Posts</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 nopadding animate-box" data-animate-effect="fadeIn">
                        {/* <div class="insta" style="background-image: url(images/insta-1.jpg);"></div> */}
                    </div>
                    <div class="col-md-3 nopadding animate-box" data-animate-effect="fadeIn">
                        {/* <div class="insta" style="background-image: url(images/insta-2.jpg);"></div> */}
                    </div>
                    <div class="col-md-3 nopadding animate-box" data-animate-effect="fadeIn">
                        {/* <div class="insta" style="background-image: url(images/insta-3.jpg);"></div> */}
                    </div>
                    <div class="col-md-3 nopadding animate-box" data-animate-effect="fadeIn">
                        {/* <div class="insta" style="background-image: url(images/insta-4.jpg);"></div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default InstagramNews;