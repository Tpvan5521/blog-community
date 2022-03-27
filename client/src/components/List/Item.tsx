import React from "react";
import { Link } from "react-router-dom";

export interface IItem {
  content: string | JSX.Element;
  link: string;
  key?: number;
  icon?: JSX.Element;
}

// a simple & linked item
const Item = ({ content, link, icon }: IItem) => {
  return (
    <li className="p-2 my-1 hover:bg-transparent">
      <Link to={link} className="w-full flex items-center">
        {icon} {content}
      </Link>
    </li>
  );
};

export default Item;
