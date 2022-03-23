import React from "react";
import MenuItem from "components/Menu/VMenu/Item";
import { IVItem } from "components/Menu/VMenu/Item";
import Title from "components/Text/Title";
import SidebarTopCard from "components/Card/SidebarTopCard";
import SidebarBottomCard from "components/Card/SidebarBottomCard";
import Hr from "Line/Hr";

import posts from "db/fposts";
import Post from "constants/interfaces/post.interface";
import { menuItems, tags } from "./fData";
import { AiOutlineSetting } from "react-icons/ai";

function HomePage() {
  console.log(posts);
  return (
    <div className="flex my-4">
      {/* left menu */}
      <div className="w-60 pr-4">
        <ul className="my-4">
          {menuItems.map((item: IVItem, key: number) => (
            <MenuItem content={item.content} link={item.link} key={key} icon={item.icon} />
          ))}
          <Title content="Others" />
          <MenuItem
            content="Setting"
            link="/user/setting"
            icon={
              <div className="text-xl mr-4">
                <AiOutlineSetting />
              </div>
            }
          />
        </ul>
        <Hr />
        <ul className="my-4">
          <Title content="Popular Tags" />
          {tags.map((tag: IVItem, key: number) => (
            <MenuItem content={tag.content} link={tag.link} key={key} icon={tag.icon} />
          ))}
        </ul>
      </div>
      {/* main */}
      <div className="flex-1 my-4">q</div>
      {/* right menu */}
      <div className="w-80 pl-4 my-4">
        <ul className="mb-4">
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
        </ul>
        <ul className="mb-4">
          <Title content="FAQs" customClassName="mb-4" />
          {posts.slice(0, 5).map((post: Post, key: number) => (
            <SidebarBottomCard title={post.description} link="/" tags={post.tags} key={key} customClassName="mb-2 bg-transparent" />
          ))}
          {/* faqs */}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
