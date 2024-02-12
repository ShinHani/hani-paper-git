import React from 'react';
import './module.scss';
import RightContents from '../rightcontents/rightcontents.js';
import SideBar from '../sidebar/sidebar.js';
class MainContent extends React.Component {
    render() {
        return (
            <div id="fh5co-content">
                <div class="container">
                    <div class="row">
                        <RightContents />
                        <SideBar />
                    </div>
                </div>
            </div>
        );
    }
}
export default MainContent;