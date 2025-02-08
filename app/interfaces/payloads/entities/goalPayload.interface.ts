export default interface GoalPayload {
  name: string;
  image?: {
    url: string;
    id: string;
  };
  description?: string;
  progress: number;
  targetAmount: number;
}
