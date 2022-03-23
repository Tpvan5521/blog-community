import React from "react";
import Paragraph from "components/Text/Paragraph";
import { Link } from "react-router-dom";
import { OutlineDefaultButton } from "../Button/OutlineButton";
import styled from "styled-components";

interface ICard {
  title: string;
  link: string;
  tags: string[];
  customClassName?: string;
}

const StyledWrapText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SidebarBottomCard = ({ title, link, tags, customClassName }: ICard) => {
  return (
    <li className={`rounded-lg ${customClassName}`}>
      <div className="p-4">
        <Link to={link} className="w-full">
          <StyledWrapText>{title}</StyledWrapText>
        </Link>
        <div className="flex mt-1">
          {tags.map((tag: string, key: number) => (
            <OutlineDefaultButton content={"#" + tag} key={key} customClassName="outline-none h-7 px-2" />
          ))}
        </div>
      </div>
    </li>
  );
};

export default SidebarBottomCard;
