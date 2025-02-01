export default function FormatNumber(number: number) {
  return number.toLocaleString("en-GB", { maximumFractionDigits: 2 });
}
