

import React from 'react';
import DemoItem from './demoItem';

export default ({ demoList }) => {
	return (
		<ul>
			{
				demoList.map((v, k) => {
					return (
						<DemoItem key={k}>{v.title}</DemoItem>
					)
				})
			}
		</ul>
	)
}