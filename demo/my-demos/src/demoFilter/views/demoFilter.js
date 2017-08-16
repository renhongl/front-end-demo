


import Input from 'antd/lib/input';
import React from 'react';

const Search = Input.Search;

export default class DemoFilter extends React.Component{
    constructor(props) {
        super(props);
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(filter) {
        this.props.changeDemoFilter(filter);
    }

    render() {
        return (
            <Search className="navigation-search" placeholder="搜索项目" onSearch={this.changeFilter}/>
        )
    }
}