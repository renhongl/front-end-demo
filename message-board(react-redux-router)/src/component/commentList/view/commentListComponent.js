import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const CommentListComponent = ( {commentList}) => {
	const list = commentList.map((v, k) => {
		return (
		<Card key={v.id}>
		<CardHeader
		title={v.userName}
		subtitle={v.dateTime}
		avatar={v.src}
		/>
		<CardText>
{v.content}
		</CardText>
		</Card>
		);
	})
	return (
		<div>{list}</div>

	)
}
