

import React from 'react';

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
				搜索: <input type="text" onKeyUp={this.onFilterChange}/>
			</div>
		)
	}
}