export interface Comment {
  id: string;
  content: string;
  user: string; // id
  reply: Comment[];
  reactions: Reaction;
}

export interface Reaction {
  like: number;
  love: number;
  unicorn: number;
  share: number;
}
