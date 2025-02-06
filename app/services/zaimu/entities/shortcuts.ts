import { api } from "../api";
import ShortcutPayload from "~/interfaces/payloads/entities/shortcutPayload.interface";

export async function createShortcut(data: {
  [key: string]: FormDataEntryValue;
}) {
  const amount = parseFloat(
    data.amount.toString().replaceAll(",", "").replace("$", "")
  );

  const payload: ShortcutPayload = {
    name: data.name.toString(),
    type: data.type.toString().toLowerCase(),
    amount: amount,
  };

  if (data.category) payload.category = data.category.toString();

  const response = await api.post("/shortcuts", payload);

  return response.data;
}

export async function getShortcuts() {
  const response = await api.get("/shortcuts");
  return response.data;
}

export async function deleteShortcut(id: string) {
  const response = await api.delete(`/shortcuts/${id}`);
  return response.data;
}
