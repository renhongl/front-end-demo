import React from "react";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import FontIcon from 'material-ui/FontIcon';
import { Link } from "react-router-dom";

const styles = {
  list: {
    height: "100%",
    overflow: "auto",
    padding: 0
  },
  listItem: {
    textDecoration: 'none'
  }
};

export const MessageListComponent = ({ items, goDetail }) => {
  const list = items.map((item, index) => {
    return (
        <ListItem
          key={item.id}
          leftAvatar={<Avatar src={item.src} />}
          primaryText={item.title}
          rightIcon={<Link to={`/detail/${item.id}`}><i className="material-icons">expand_more</i></Link>}
          secondaryText={`${item.name} ${item.date}`}
          style={styles.listItem}
        />
    );
  });
  return <List style={styles.list}>{list}</List>;
};
