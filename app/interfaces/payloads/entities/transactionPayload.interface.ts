export default interface TransactionPayload {
  type: string;
  amount: number;
  name: string;
  category?: string;
  image?: {
    url: string;
    id: string;
  };
  description?: string;
  recurring: boolean;
  recurrency?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
