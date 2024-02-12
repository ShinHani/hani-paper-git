import React from 'react';
import './module.scss';
class GoToHomeButton extends React.Component {
    render() {
        return (
            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
            </div>
        );
    }
}
export default GoToHomeButton;