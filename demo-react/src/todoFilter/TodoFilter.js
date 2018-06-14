



import React, { Component } from 'react';

export default class TodoFilterComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { changeFilter, filter } = this.props;
        return (
            <div>
                <input type="radio" name="filter" value="all" onChange={changeFilter} checked={filter === 'all'}/>all
                <input type="radio" name="filter" value="complete" onChange={changeFilter} checked={filter === 'complete'}/>complete
                <input type="radio" name="filter" value="incomplete" onChange={changeFilter} checked={filter === 'incomplete'}/>incomplete
            </div>
        )
    }
}