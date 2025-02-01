import { path } from "../paths/paths.data";

export const financesLinks = [
  { text: "Transactions", link: path.app.finances.transactions },
  { text: "Expenses", link: path.app.finances.expenses },
  { text: "Incomes", link: path.app.finances.incomes },
  { text: "Savings", link: path.app.finances.savings },
];

export const overviewLinks = [
  { text: "General", link: path.app.overview.general },
  { text: "Expenses", link: path.app.overview.expenses },
  { text: "Incomes", link: path.app.overview.incomes },
  { text: "Categories", link: path.app.overview.categories },
];

export const actionsLinks = [
  { text: "Shortcuts", link: path.app.finances.transactions },
  { text: "Recurring", link: path.app.finances.expenses },
];

export const settingsLinks = [
  { text: "Profile", link: path.app.finances.transactions },
  { text: "Preferences", link: path.app.finances.expenses },
  { text: "Notifications", link: path.app.finances.expenses },
];
