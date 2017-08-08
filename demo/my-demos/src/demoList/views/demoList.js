

import React from 'react';
import DemoItem from './demoItem';

export default ({ demoList }) => {
	return (
		<section>
			{
				demoList.map((v, k) => {
					return (
						<DemoItem key={k} url={v.url}>{v.title}</DemoItem>
					)
				})
			}
		</section>
	)
}