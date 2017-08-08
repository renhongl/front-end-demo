
import { view as DemoList } from '../../demoList';
import { view as DemoFilter } from '../../demoFilter';
import { view as Carousel } from '../../carousel';
import React from 'react';

export default () => {
    return (
        <div>
            <Carousel />
        	<DemoFilter />
        	<DemoList />
        </div>
    )
}