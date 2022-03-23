import Role from "../enums/role.enum";
import User from "./user.interface";

interface Author {
  id: string;
  info: User;
  posts: string[]; // posts Id
}

export default Author;
