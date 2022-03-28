import React from "react";
import ContentHeader from "components/Layout/ContentLayout/ContentHeader";
import ContentFooter from "components/Layout/ContentLayout/ContentFooter";
import ContentLayout from "components/Layout/ContentLayout";
import ContentMain from "components/Layout/ContentLayout/ContentMain";
import ContentRight from "components/Layout/ContentLayout/ContentRight";
import RightBar from "pages/components/RightBar";
import Breadcrumb from "components/Breadcrumb";
import MarkdownContent from "markdown/MarkdownContent";
import Vr from "components/Line/Vr";
import RelatedCard from "components/Card/RelatedCard";

import posts from "db/fposts";
import Post from "constants/interfaces/post.interface";

const PostDetailsPage = () => {
  return (
    <>
      <ContentHeader>
        <Breadcrumb content={["Home", "Posts", "Post's Title"]} link={["/", "/", "/posts/read"]} />
      </ContentHeader>
      <ContentLayout>
        <>
          <ContentMain customClassName="rounded-xl py-4 mr-8">
            <div className="flex h-full">
              <div className="flex-1">
                <MarkdownContent content="jjj" />
              </div>
              <Vr />
            </div>
          </ContentMain>
          <ContentRight>
            <RightBar />
          </ContentRight>
        </>
      </ContentLayout>
      <ContentFooter>
        <ul className="flex">
          {posts.slice(0, 4).map((post: Post, key: number) => (
            <RelatedCard title={post.title} author={post.author} link="/posts/read" key={key} />
          ))}
        </ul>
      </ContentFooter>
    </>
  );
};

export default PostDetailsPage;
