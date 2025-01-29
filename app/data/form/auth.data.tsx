import DateInput from "~/components/form/dateInput";
import Input from "~/components/form/input";

export const registerFirst = [
  <div className="flex gap-3" key={"name-inputs"}>
    <Input placeholder="First name" type="text" name="firstName" required />
    <Input placeholder="Last name" type="text" name="lastName" required />
  </div>,

  <Input
    key={"email-input"}
    placeholder="Email"
    type="email"
    name="email"
    required
  />,

  <div className="flex gap-3" key={"currency-data-inputs"}>
    <Input
      placeholder="Currency"
      type="text"
      name="currency"
      defaultValue="COP"
      required
    />
    <DateInput placeholder="Birth date" name="date" required />
  </div>,

  <Input
    key={"password-input"}
    placeholder="Password"
    type="password"
    name="password"
    required
  />,
];

export const registerSecond = [
  <div className="flex gap-3" key={"user-profession-inputs"}>
    <Input placeholder="User name" type="text" name="userName" required />
    <Input placeholder="Profession (Optional)" type="text" name="profession" />
  </div>,

  <Input
    key={"gender-input"}
    placeholder="Gender"
    type="text"
    name="gender"
    required
  />,
];

export const registerThird = [
  <div className="flex gap-3" key={"language-theme-inputs"}>
    <Input
      placeholder="Language"
      type="text"
      name="language"
      defaultValue="es"
      required
    />
    <Input
      placeholder="Theme"
      type="text"
      name="theme"
      defaultValue="dark"
      required
    />
  </div>,

  <Input
    key={"phone-input"}
    placeholder="Phone (Optional)"
    type="tel"
    name="phone"
  />,
];

export const login = [
  <Input
    key={"email1-input"}
    placeholder="Email"
    type="email"
    name="email"
    required
  />,
  <Input
    key={"password2-input"}
    placeholder="Password"
    type="password"
    name="password"
    required
  />,
];
