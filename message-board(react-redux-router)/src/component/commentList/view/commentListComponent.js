import React from 'react';

export const CommentListComponent = ( {commentList}) => {
	const list = commentList.map((v, k) => {
		return (
			<div key={k}>{v.content}</div>
		)
	})
	return (
		<div>{list}</div>
	)
}
