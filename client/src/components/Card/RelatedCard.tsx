import React from "react";
import styled from "styled-components";
import Title from "components/Text/Title";
import Paragraph from "components/Text/Paragraph";
import { Link } from "react-router-dom";

interface ICard {
  title: string;
  link: string;
  author: string;
  customClassName?: string;
}

export const RelatedCard = ({ title, link, author, customClassName }: ICard) => {
  return (
    <li className={`flex-1 flex items-center mr-4 ${customClassName}`}>
      <div className="p-2 border-2 border-transparent rounded-lg">
        <Link to={link} className="w-full">
          <Title content={title} />
        </Link>
        <Paragraph content={author} customClassName="text-white" />
      </div>
    </li>
  );
};

export default RelatedCard;
