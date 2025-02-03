import Category from "~/interfaces/entities/category.interface";
import { api } from "../api";

export async function createCategory(data: {
  [key: string]: FormDataEntryValue;
}) {
  const payload: Category = {
    name: data.name.toString(),
    color: data.color.toString(),
  };

  const response = await api.post("/categories", payload);
  return response.data;
}

export async function getCategories() {
  const response = await api.get("/categories");
  return response.data;
}

export async function deleteCategory(id: string) {
  const response = await api.delete(`/categories/${id}`);
  return response.data;
}
