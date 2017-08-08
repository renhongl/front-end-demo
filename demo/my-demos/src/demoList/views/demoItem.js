



import React from 'react';

export default ({ children, url }) => {
	return (
		<a href={url} target="_blank">{children}</a>
	)
}