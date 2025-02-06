import User from "~/interfaces/user/user.interface";

export default interface ShortcutPayload {
  name: string;
  type: string;
  category?: string;
  amount: number;
  user?: User;
}
