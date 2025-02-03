import Transaction from "~/interfaces/entities/transaction.interface";
import { api } from "../api";

export async function createTransaction(data: {
  [key: string]: FormDataEntryValue;
}) {
  const amount = parseFloat(
    data.amount.toString().replaceAll(",", "").replace("$", "")
  );

  const payload: Transaction = {
    type: data.type.toString().toLowerCase(),
    amount: amount,
    name: data.name.toString(),
    recurring: false,
  };

  if (data.category) payload.category = data.category.toString();

  const response = await api.post("/", payload);
  return response.data;
}

export async function getTransactions() {
  const response = await api.get("/transactions");
  return response.data;
}

export async function deleteTransaction(id: string) {
  const response = await api.get(`/transactions/item/${id}`);
  return response.data;
}
