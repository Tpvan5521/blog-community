import React from "react";
import styled from "styled-components";
import Title from "components/Text/Title";
import Paragraph from "components/Text/Paragraph";
import { Link } from "react-router-dom";

interface ICard {
  srcImg: string;
  title: string;
  link: string;
  author: string;
  description?: string;
  customClassName?: string;
  imgW?: string | number;
  imgH?: string | number;
}

export const SidebarTopCard = ({ srcImg, title, link, author, description, customClassName, imgH, imgW }: ICard) => {
  return (
    <li className={`flex items-center bg-transparent rounded-lg ${customClassName}`}>
      <img src={srcImg} alt={title} width={imgW ? imgW : "auto"} height={imgH ? imgH : "auto"} className="rounded-l-lg" />
      <div className="p-2">
        <Link to={link} className="w-full">
          <Title content={title} />
        </Link>
        <Paragraph content={author} customClassName="font-bold text-white" />
        <Paragraph content={description ? description : ""} />
      </div>
    </li>
  );
};

export default SidebarTopCard;
