import React from "react";
import styled from "styled-components";
import Title from "components/Text/Title";
import Paragraph from "components/Text/Paragraph";
import { Link } from "react-router-dom";
import { Reaction } from "constants/interfaces/reactions.interface";

import { AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";

interface ICard {
  srcImg: string;
  title: string;
  link: string;
  author: string;
  description: string;
  reaction: Reaction;
  customClassName?: string;
  imgW?: string | number;
  imgH?: string | number;
}

const StyledReaction = styled.div`
  margin-right: 1rem;
  display: flex;
  aline-items: center;
`;

export const HomeCard = ({ srcImg, title, link, author, description, reaction, customClassName, imgH, imgW }: ICard) => {
  return (
    <li className={`flex items-center bg-transparent rounded-2xl mb-4 ${customClassName}`}>
      <img src={srcImg} alt={title} width={imgW ? imgW : "auto"} height={imgH ? imgH : "auto"} className="rounded-l-lg" />
      <div className="p-4">
        <Link to={link} className="w-full">
          <Title content={title} customClassName="text-3xl mb-4" />
        </Link>
        <p className="flex items-center mb-4">
          <Title content={author} customClassName="text-warning mr-4" />
          <StyledReaction>
            <div className="flex items-center mr-2">
              <AiOutlineEye />
            </div>
            <div>{reaction.view}</div>
          </StyledReaction>
          <StyledReaction>
            <div className="flex items-center mr-2">
              <AiOutlineComment />
            </div>
            <div>{reaction.comment}</div>
          </StyledReaction>
          <StyledReaction>
            <div className="flex items-center mr-2">
              <BiShare />
            </div>
            <div>{reaction.share}</div>
          </StyledReaction>
        </p>
        <Paragraph content={description} />
      </div>
    </li>
  );
};

export default HomeCard;
