

import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import Counter from './Counter';
import Summary from './Summary';

let stateKeys = Object.keys(store.getState());

const counterHtml = stateKeys.map( (counter, index) => {
    return <Counter key={index} caption={counter} />
}) 

ReactDOM.render(
    <div>
        {counterHtml}
        <Summary/>
    </div>,
    document.getElementById('root')
) 



