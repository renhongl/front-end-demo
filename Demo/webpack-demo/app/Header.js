

import React, {Component} from 'react';
import config from './config.json';
import styles from './Header.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                {config.name}
            </div>
        )
    }
}

export default Header;