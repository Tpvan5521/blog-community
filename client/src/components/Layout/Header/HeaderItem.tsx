import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderItem = ({ content, link, key }: { content: string | JSX.Element; link: string; key: number }) => {
  return (
    <li key={key} className="py-2 px-4">
      <Link to={link}>{content}</Link>
    </li>
  );
};

export default HeaderItem;
