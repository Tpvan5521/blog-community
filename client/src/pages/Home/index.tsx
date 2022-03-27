import React from "react";
import ContentLayout from "components/Layout/ContentLayout";
import ContentLeft from "components/Layout/ContentLayout/ContentLeft";
import ContentMain from "components/Layout/ContentLayout/ContentMain";
import ContentRight from "components/Layout/ContentLayout/ContentRight";
import LeftBar from "../components/LeftBar";
import Posts from "./Posts";
import RightBar from "pages/components/RightBar";

const HomePage = () => {
  return (
    <>
      <ContentLayout>
        <>
          <ContentLeft>
            <LeftBar />
          </ContentLeft>
          <ContentMain>
            <Posts />
          </ContentMain>
          <ContentRight>
            <RightBar />
          </ContentRight>
        </>
      </ContentLayout>
    </>
  );
};

export default HomePage;
