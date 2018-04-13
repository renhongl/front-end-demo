import React from "react";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

export const MessageListComponent = props => {
  const list = props.items.map((item, index) => {
    return (
      <ListItem
        key={index}
        leftAvatar={<Avatar src={item.src} />}
        primaryText={item.title}
        secondaryText={`by: ${item.name} at ${item.date}`}
      />
    );
  });
  return <List>{list}</List>;
};
