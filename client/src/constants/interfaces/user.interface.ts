import Role from "constants/enums/role.enum";

interface User {
  uid: string;
  fullname: string;
  username: string;
  email: string;
  img?: string;
  github?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  createdDate: Date;
  updatedDate: Date;
  role: Role[];
  activities: any[]; // reactions | create post | join group...
}

export default User;
