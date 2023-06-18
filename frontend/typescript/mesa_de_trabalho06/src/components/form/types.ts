export type DateTask = {
  id: number;
  title: string;
  category: string;
  date: Date;
  description: string;
  onRemove?: () => void;
}
