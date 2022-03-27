import React from "react";
import List from "components/List";
import Item, { IItem } from "components/List/Item";
import Title from "components/Text/Title";

import { menuItems, otherItems, tags } from "./dataItems";

const LeftBar = () => {
  return (
    <>
      <List>
        <>
          {menuItems.map((item: IItem, key: number) => (
            <Item content={item.content} link={item.link} key={key} icon={item.icon} />
          ))}
          <Title content="Others" />
          {otherItems.map((item: IItem, key: number) => (
            <Item content={item.content} link={item.link} key={key} icon={item.icon} />
          ))}
        </>
      </List>
      <List>
        <>
          <Title content="Popular Tags" />
          {tags.map((tag: IItem, key: number) => (
            <Item content={tag.content} link={tag.link} key={key} icon={tag.icon} />
          ))}
        </>
      </List>
    </>
  );
};

export default LeftBar;
