import User from "~/interfaces/user/user.interface";
import { api } from "../api";
import Login from "~/interfaces/user/login.interface";

export async function createUser(
  data: { [key: string]: FormDataEntryValue },
  firstForm: { [key: string]: FormDataEntryValue },
  finalData: { emailNotification: boolean; whatsAppReminder: boolean }
) {
  const payload: User = {
    name: firstForm.firstName.toString(),
    lastName: firstForm.lastName.toString(),
    profession: firstForm.profession.toString(),
    email: firstForm.email.toString(),
    password: firstForm.password.toString(),
    settings: {
      language: data.language.toString(),
      currency: firstForm.currency.toString(),
      appearance: data.appearance.toString(),
      notifications: {
        email: finalData.emailNotification,
        whatsApp: finalData.whatsAppReminder,
      },
    },
  };

  const response = await api.post("/register", payload);
  return response.data;
}

export async function loginUser(data: { [key: string]: FormDataEntryValue }) {
  const payload: Login = {
    email: data.email.toString(),
    password: data.password.toString(),
  };

  const response = await api.post("/login", payload);
  return response.data;
}

export async function getUser() {
  const response = await api.get("/user");
  return response.data;
}
