import React from "react";

import ListItem from "./ListItem";

const List = ({ items }) => {
  if (items)
    items = items.map(i => (
      <ListItem
        key={i.id}
        name={i.name}
        username={i.username}
        address={i.address}
      />
    ));
  return <div className="user-list">{items}</div>;
};

export default List;
