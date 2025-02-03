import User from "../user/user.interface";
import Category from "./category.interface";

export default interface Transaction {
  _id?: string;
  type: string;
  amount: number;
  name: string;
  category?: Category | string;
  image?: {
    url: string;
    id: string;
  };
  description?: string;
  recurring: boolean;
  recurrency?: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
