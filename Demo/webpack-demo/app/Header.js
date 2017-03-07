

import React, {Component} from 'react';
import config from './config.json';

class Header extends Component {
    render() {
        return (
            <div>
                {config.name}
            </div>
        )
    }
}