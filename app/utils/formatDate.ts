export default function FormatDate(date: Date) {
  const day = date.getDay();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
