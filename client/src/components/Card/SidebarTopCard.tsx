import React from "react";
import Title from "components/Text/Title";
import Paragraph from "components/Text/Paragraph";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICard {
  srcImg: string;
  title: string;
  link: string;
  author: string | JSX.Element;
  description?: string;
  customClassName?: string;
  imgW?: string | number;
  imgH?: string | number;
}

const StyledWrapText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
`;

export const SidebarTopCard = ({ srcImg, title, link, author, description, customClassName, imgH, imgW }: ICard) => {
  return (
    <li className={`flex items-center rounded-lg ${customClassName}`}>
      <img src={srcImg} alt={title} width={imgW ? imgW : "auto"} height={imgH ? imgH : "auto"} className="rounded-l-lg" />
      <div className="p-2">
        <Link to={link} className="w-full">
          <StyledWrapText>{title}</StyledWrapText>
        </Link>
        <p className="text-white">
          By <span className="underline">{author}</span>
        </p>
      </div>
    </li>
  );
};

export default SidebarTopCard;
