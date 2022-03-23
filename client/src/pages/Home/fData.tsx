import React from "react";
import { IVItem } from "components/Menu/VMenu/Item";

import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts, AiOutlineQuestionCircle } from "react-icons/ai";
import { CgHashtag } from "react-icons/cg";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

export const menuItems: IVItem[] = [
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
];

export const tags: IVItem[] = [
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
