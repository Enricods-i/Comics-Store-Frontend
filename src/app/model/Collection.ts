import { Category } from "./Category";

export interface Collection {
  id: number;
  name: string;
  price: number;
  yearOfRelease: number | null;
  formatAndBinding: string | null;
  color: boolean | null;
  description: string | null;
  categories: Category[] | null;
  creationDate: Date;
  dateOfLastModification: Date;
}
