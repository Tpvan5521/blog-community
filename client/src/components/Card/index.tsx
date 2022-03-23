import React from "react";
import styled from "styled-components";
import Title from "components/Text/Title";
import Paragraph from "components/Text/Paragraph";

interface ICard {
  srcImg: string;
  title: string;
  author: string;
  description?: string;
  customClassName?: string;
  imgW?: string | number;
  imgH?: string | number;
}

const Card = ({ srcImg, title, author, description, customClassName, imgH, imgW }: ICard) => {
  return (
    <li className={`flex items-center bg-transparent rounded ${customClassName}`}>
      <img src={srcImg} alt={title} width={imgW ? imgW : "auto"} height={imgH ? imgH : "auto"} />
      <div className="p-2">
        <Title content={title} />
        <Paragraph content={description ? description : ""} />
      </div>
    </li>
  );
};

export default Card;
