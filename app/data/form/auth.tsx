import DateInput from "~/components/form/dateInput";
import Input from "~/components/form/input";

export const registerFirst = [
  <div className="flex gap-3" key={""}>
    <Input placeholder="First name" type="text" />
    <Input placeholder="Last name" type="text" />
  </div>,

  <Input key={""} placeholder="Email" type="email" />,

  <div className="flex gap-3" key={""}>
    <Input placeholder="Currency" type="text" />
    <DateInput placeholder="Birth date" />
  </div>,

  <Input key={""} placeholder="Password" type="password" />,
];

export const registerSecond = [
  <div className="flex gap-3" key={""}>
    <Input placeholder="User name" type="text" />
    <Input placeholder="Profession" type="text" />
  </div>,

  <Input key={""} placeholder="Gender" type="text" />,
];

export const registerThird = [
  <div className="flex gap-3" key={""}>
    <Input placeholder="Language" type="text" />
    <Input placeholder="Theme" type="text" />
  </div>,
  <Input key={""} placeholder="Phone" type="tel" />,
];

export const login = [
  <Input key={""} placeholder="Email" type="email" />,
  <Input key={""} placeholder="Password" type="password" />,
];
