import User from "../user/user.interface";

export default interface Goal {
  _id: string;
  name: string;
  image?: {
    url: string;
    id: string;
  };
  description?: string;
  progress: number;
  targetAmount: number;
  user?: User;
}
