import React, { useState } from "react";
import AuthStatus from "./AuthStatus";
import styled from "styled-components";
import { useAuth } from "routes/routes";
import coffee from "assets/icons/coffee.png";
import Search from "components/Input/Search";
import Hr from "Line/Hr";

const StyledHeader = styled.div`
  background: linear-gradient(to right, rgb(12, 12, 12), rgb(67, 67, 67));
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const FirstItem = styled.div`
  padding: 0.5rem 0;
  height: 4rem;
  display: flex;
  align-items: center;
  font: 400 32px/1.3 "Cookie", Helvetica, sans-serif;
`;

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <StyledHeader>
      <div className="container mx-auto">
        <div className="flex h-16 justify-between">
          <FirstItem>
            CoffeeCode &#60;
            <img src={coffee} alt="coffee" width={28} height={28} />
            &#47;&#62;
          </FirstItem>
          <div className="flex-1 flex">
            <Search
              value={searchValue}
              placeholder="Search post..."
              onChange={(e: any) => setSearchValue(e.target.value)}
              maxWidth="320px"
            />
          </div>
          <div className="flex items-center">
            <AuthStatus useAuth={useAuth} />
          </div>
        </div>
      </div>
      <Hr />
    </StyledHeader>
  );
};

export default Header;
