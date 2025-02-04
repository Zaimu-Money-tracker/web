import Goal from "~/interfaces/entities/goal.interface";
import { api } from "../api";

export async function createGoal(data: { [key: string]: FormDataEntryValue }) {
  const targetAmount = parseFloat(
    data.targetAmount.toString().replaceAll(",", "").replace("$", "")
  );

  const payload: Goal = {
    name: data.name.toString(),
    progress: 0,
    targetAmount: targetAmount,
  };

  const response = await api.post("/goals", payload);
  return response.data;
}

export async function getGoals() {
  const response = await api.get("/goals");
  return response.data;
}

export async function deleteGoal(id: string) {
  const response = await api.delete(`/goals/${id}`);
  return response.data;
}
