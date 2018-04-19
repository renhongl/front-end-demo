import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import { Link } from 'react-router-dom';

const styles = {
  container: {
    height: '100%',
  },
  card: {
    height: "100%"
  },
  backBtn: {
    height: 40,
    lineHeight: '40px',
    marginLeft: 10
  }
};

export const MessageDetailComponent = ({ message, updateMessage }) => {
  const { src, title, name, content, love, comment, goBack, date  } = message;
  return (
    <div style={styles.container}>
    <Link to='/'><i className="material-icons" style={styles.backBtn}>reply</i></Link>
    <Card expanded={true} style={styles.card}>
      <CardHeader title={title} subtitle={name + ' ' + date} avatar={src} />
      <CardText expandable={true}>{content}</CardText>
      <CardActions>
      <FlatButton
        label={love}
        icon={<i className="material-icons">favorite</i>}
        onClick={e => updateMessage({...message, love: love + 1})}
      />
      <FlatButton
        label={comment}
        icon={<i className="material-icons">comment</i>}
      />
      </CardActions>
    </Card>
  </div>
  );
};
