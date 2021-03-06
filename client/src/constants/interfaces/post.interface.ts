import { Reaction } from "./reactions.interface";

interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  imgUrl: string;
  keywords: string[];
  tags: string[];
  createdDate: Date | string;
  updatedDate: Date | string; // last updated;
  reaction: Reaction;
  comments: Comment[];
}

export default Post;
