

import React from 'react';
import Input from 'antd/lib/input';
const Search = Input.Search;

export default class DemoFilter extends React.Component{
	constructor(props) {
		super(props);
		this.onFilterChange = this.onFilterChange.bind(this);
	}

	onFilterChange(e) {
		const { changeFilter } = this.props;
		changeFilter(e.target.value.trim());
	}

	render() {
		return (
			<div>
				<Search placeholder="搜索一个项目" onKeyUp={this.onFilterChange}/>
			</div>
		)
	}
}