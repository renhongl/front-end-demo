

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export default () => (
    <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
)