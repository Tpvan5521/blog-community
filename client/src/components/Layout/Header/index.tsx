import React from "react";
import AuthStatus from "./AuthStatus";
import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import { useAuth } from "routes/routes";
import coffee from "assets/icons/coffee.png";

const StyledHeader = styled.div`
  box-shadow: 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1);
`;

const FirstItem = styled.div`
  padding: 0.5rem 1rem 0.5rem 0;
  height: 4rem;
  display: flex;
  align-items: center;
  font: 400 32px/1.3 "Cookie", Helvetica, sans-serif;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container mx-auto">
        <div className="flex h-16 justify-between">
          <FirstItem>
            CoffeeCode &#60;
            <img src={coffee} alt="coffee" width={28} height={28} />
            &#47;&#62;
          </FirstItem>
          <ul className="flex-1 flex items-center">
            {listItems.map((item: any[], key: number) => (
              <HeaderItem content={item[0]} link={item[1]} key={key} />
            ))}
          </ul>
          <div className="flex items-center">
            <AuthStatus useAuth={useAuth} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const listItems = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default Header;
