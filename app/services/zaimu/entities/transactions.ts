import { api } from "../api";
import TransactionPayload from "~/interfaces/payloads/entities/transactionPayload.interface";

export async function createTransaction(data: {
  [key: string]: FormDataEntryValue;
}) {
  const amount = parseFloat(
    data.amount.toString().replaceAll(",", "").replace("$", "")
  );

  const payload: TransactionPayload = {
    type: data.type.toString().toLowerCase(),
    amount: amount,
    name: data.name.toString(),
    recurring: false,
  };

  if (data.category) payload.category = data.category.toString();

  const response = await api.post("/transactions", payload);
  return response.data;
}

export async function createTransactionWithPayload(
  payload: TransactionPayload
) {
  const response = await api.post("/transactions", payload);
  return response.data;
}

export async function getTransactions() {
  const response = await api.get("/transactions");
  return response.data;
}

export async function getExpenses() {
  const response = await api.get("/transactions/expenses");
  return response.data;
}

export async function getIncomes() {
  const response = await api.get("/transactions/incomes");
  return response.data;
}

export async function deleteTransaction(id: string) {
  const response = await api.delete(`/transactions/item/${id}`);
  return response.data;
}

export async function updateTransaction(
  id: string,
  data: {
    [key: string]: FormDataEntryValue;
  }
) {
  const amount = parseFloat(
    data.amount.toString().replaceAll(",", "").replace("$", "")
  );

  const payload: TransactionPayload = {
    type: data.type.toString().toLowerCase(),
    amount: amount,
    name: data.name.toString(),
    recurring: false,
  };

  if (data.category) payload.category = data.category.toString();

  const response = await api.put(`/transactions/item/${id}`, payload);
  return response.data;
}
