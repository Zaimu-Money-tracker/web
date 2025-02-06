import User from "../user/user.interface";
import Category from "./category.interface";

export default interface Shortcut {
  _id: string;
  name: string;
  type: string;
  category: Category;
  amount: number;
  user: User;
}
