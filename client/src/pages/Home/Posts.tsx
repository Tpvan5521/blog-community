import React from "react";
import List from "components/List";
import Title from "components/Text/Title";
import HomeCard from "components/Card/HomeCard";

import posts from "db/fposts";
import Post from "constants/interfaces/post.interface";

const Posts = () => {
  return (
    <List>
      <>
        <Title content="Recommend Posts" customClassName="mb-4" />
        {posts.slice(0, 5).map((post: Post, key: number) => (
          <HomeCard
            title={post.title}
            link="/"
            author={post.author}
            description={post.description}
            reaction={post.reaction}
            srcImg={post.imgUrl}
            imgH={240}
            imgW={240}
            key={key}
          />
        ))}
      </>
    </List>
  );
};

export default Posts;
