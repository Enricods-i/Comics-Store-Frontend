import { Category } from "./Category";

export interface Collection {
  id: number;
  name: string;
  price: number;
  yearOfRelease?: number;
  formatAndBinding?: string;
  color?: boolean;
  description?: string;
  categories?: Category[];
  creationDate: Date;
  dateOfLastModification: Date;
}
