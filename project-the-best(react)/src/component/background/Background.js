

import React, { Component } from 'react';


import './style.less';
import PropTypes from 'prop-types';

export default class Background extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let style = {};
        if(this.props.config.showBackgroundPicture) {
            style.backgroundImage = `url(${this.props.config.backgroundImage})`;
        } else {
            style.backgroundColor = `rgba(${this.props.config.backgroundColor},1)`;
        }
        return (
            <section className='background' style={style} onClick={this.props.closeSetting}>
            </section>
        )
    }
}

Background.propTypes = {
    config: PropTypes.object.isRequired,
};

Background.defaultProps = {
    config: {},
};
