import { Category } from "./Category.model";

export interface Picture {
  id: number,
  title: string,
  description: string,
  categories: Category[]
}
