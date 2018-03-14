

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default class Setting extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={this.props.show ? 'setting show' : 'setting hide'}>
                setting
            </section>
        )
    }
}

Setting.propTypes = {
    show: PropTypes.bool.isRequired
}

Setting.defaultProps = {
    show: false
}