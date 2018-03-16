

import React, { Component } from 'react';


import './style.less';
import PropTypes from 'prop-types';

export default class Background extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundImage: `url(${this.props.config.backgroundImage})`,
            backgroundSize: this.props.config.displaySize,
        };
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
