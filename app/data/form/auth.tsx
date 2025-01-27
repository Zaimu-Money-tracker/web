import DateInput from "~/components/form/dateInput";
import Input from "~/components/form/input";

export const registerFirst = [
  <div className="flex gap-3" key={"name-inputs"}>
    <Input placeholder="First name" type="text" name="firstName" />
    <Input placeholder="Last name" type="text" name="lastName" />
  </div>,

  <Input key={"email-input"} placeholder="Email" type="email" name="email" />,

  <div className="flex gap-3" key={"currency-data-inputs"}>
    <Input
      placeholder="Currency"
      type="text"
      name="currency"
      defaultValue="COP"
    />
    <DateInput placeholder="Birth date" name="date" />
  </div>,

  <Input
    key={"password-input"}
    placeholder="Password"
    type="password"
    name="password"
  />,
];

export const registerSecond = [
  <div className="flex gap-3" key={"user-profession-inputs"}>
    <Input placeholder="User name" type="text" name="userName" />
    <Input placeholder="Profession" type="text" name="profession" />
  </div>,

  <Input
    key={"gender-input"}
    placeholder="Gender"
    type="text"
    name="gender"
    defaultValue="Male"
  />,
];

export const registerThird = [
  <div className="flex gap-3" key={"language-theme-inputs"}>
    <Input
      placeholder="Language"
      type="text"
      name="language"
      defaultValue="es"
    />
    <Input placeholder="Theme" type="text" name="theme" defaultValue="dark" />
  </div>,

  <Input key={"phone-input"} placeholder="Phone" type="tel" name="phone" />,
];

export const login = [
  <Input key={"email1-input"} placeholder="Email" type="email" name="email" />,
  <Input
    key={"password2-input"}
    placeholder="Password"
    type="password"
    name="name"
  />,
];
