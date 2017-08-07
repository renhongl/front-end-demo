


import React from 'react';
import Link from './linkCont';
import '../style.css';
import { FilterTypes } from '../../constants';

export default () => {
    return (
        <div className="todo-filter">
            <Link>{FilterTypes.SHOW_ALL}</Link>
            <Link>{FilterTypes.SHOW_COMPELETED}</Link>
            <Link>{FilterTypes.SHOW_UNCOMPELETED}</Link>
        </div>
    )
}