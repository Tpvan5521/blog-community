import React from "react";
import { IItem } from "components/List/Item";

import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts, AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";
import { CgHashtag } from "react-icons/cg";
import { IoEllipsisHorizontalOutline, IoPeopleOutline, IoPersonOutline } from "react-icons/io5";

export const menuItems: IItem[] = [
  {
    content: "Home",
    link: "/",
    icon: (
      <div className="text-xl mr-4">
        <AiOutlineHome />
      </div>
    ),
  },
  {
    content: "About",
    link: "/about",
    icon: (
      <div className="text-xl mr-4">
        <AiOutlineInfoCircle />
      </div>
    ),
  },
  {
    content: "Contact",
    link: "/contact",
    icon: (
      <div className="text-xl mr-4">
        <AiOutlineContacts />
      </div>
    ),
  },
  {
    content: "FAQs",
    link: "/faqs",
    icon: (
      <div className="text-xl mr-4">
        <AiOutlineQuestionCircle />
      </div>
    ),
  },
  {
    content: "Community",
    link: "/community",
    icon: (
      <div className="text-xl mr-4">
        <IoPeopleOutline />
      </div>
    ),
  },
];

export const otherItems: IItem[] = [
  {
    content: "Account",
    link: "/user/:userId",
    icon: (
      <div className="text-xl mr-4">
        <IoPersonOutline />
      </div>
    ),
  },
  {
    content: "Setting",
    link: "/user/setting",
    icon: (
      <div className="text-xl mr-4">
        <AiOutlineSetting />
      </div>
    ),
  },
];

export const tags: IItem[] = [
  {
    content: "JavaScript",
    link: "/tags/javascript",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "ReactJS",
    link: "/tags/reactjs",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "Markdown",
    link: "/tags/markdown",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "NodeJS",
    link: "/tags/nodeJS",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "Blockchain",
    link: "/tags/blockchain",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "Express",
    link: "/tags/express",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "Rust",
    link: "/tags/rust",
    icon: (
      <div className="text-xl mr-4">
        <CgHashtag />
      </div>
    ),
  },
  {
    content: "More Tags",
    link: "/tags",
    icon: (
      <div className="text-xl mr-4">
        <IoEllipsisHorizontalOutline />
      </div>
    ),
  },
];
