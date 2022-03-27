import React from "react";
import List from "components/List";
import Title from "components/Text/Title";
import SidebarTopCard from "components/Card/SidebarTopCard";
import SidebarBottomCard from "components/Card/SidebarBottomCard";

import posts from "db/fposts";
import Post from "constants/interfaces/post.interface";

const RightBar = () => {
  return (
    <>
      <List>
        <>
          <Title content="Recommend Posts" customClassName="mb-4" />
          {posts.slice(0, 5).map((post: Post, key: number) => (
            <SidebarTopCard
              title={post.title}
              link="/"
              author={post.author}
              description={post.description}
              srcImg={post.imgUrl}
              imgH={88}
              imgW={88}
              key={key}
              customClassName="mb-2"
            />
          ))}
        </>
      </List>
      <List>
        <>
          <Title content="FAQs" customClassName="mb-4 " />
          {posts.slice(0, 5).map((post: Post, key: number) => (
            <SidebarBottomCard title={post.description} link="/" tags={post.tags} key={key} customClassName="mb-2 bg-transparent" />
          ))}
          {/* faqs */}
        </>
      </List>
    </>
  );
};

export default RightBar;
