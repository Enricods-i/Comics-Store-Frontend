import { CartContent } from "./CartContent";

export interface Cart {
  id: number;
  content: CartContent[];
  size: number;
  dateOfLastModification: Date;
}
