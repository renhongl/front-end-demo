
import { view as DemoListComp } from '../../demoList';
import { view as DemoFilterComp } from '../../demoFilter';
import React from 'react';

export default () => {
    return (
        <div>
        	<DemoFilterComp />
        	<DemoListComp />
        </div>
    )
}