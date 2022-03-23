import React from "react";
import MenuItem from "components/Menu/VMenu/Item";
import { IVItem } from "components/Menu/VMenu/Item";
import Title from "components/Text/Title";
import Card from "components/Card";
import Hr from "Line/Hr";

import { menuItems, tags } from "./fData";
import { AiOutlineSetting } from "react-icons/ai";

function HomePage() {
  return (
    <div className="flex my-4">
      {/* left menu */}
      <div className="w-60 pr-4">
        <ul className="my-4">
          {menuItems.map((item: IVItem, key: number) => (
            <MenuItem content={item.content} link={item.link} key={key} icon={item.icon} />
          ))}
          <Title content="Others" />
          <MenuItem
            content="Setting"
            link="/user/setting"
            icon={
              <div className="text-xl mr-4">
                <AiOutlineSetting />
              </div>
            }
          />
        </ul>
        <Hr />
        <ul className="my-4">
          <Title content="Popular Tags" />
          {tags.map((tag: IVItem, key: number) => (
            <MenuItem content={tag.content} link={tag.link} key={key} icon={tag.icon} />
          ))}
        </ul>
      </div>
      {/* main */}
      <div className="flex-1 bg-transparent my-4">q</div>
      {/* right menu */}
      <div className="w-80 pl-4 my-4">
        <ul>
          {tags.map((tag: IVItem, key: number) => (
            <MenuItem content={tag.content} link={tag.link} key={key} icon={tag.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
