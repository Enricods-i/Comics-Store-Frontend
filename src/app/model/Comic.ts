import { Author } from "./Author";
import { Collection } from "./Collection";
import { Discount } from "./Discount";

export interface Comic{
  id : number;
  collection: Collection;
  number : number;
  quantity : number;
  pages : number;
  isbn : string;
  publicationDate : Date;
  description : string;
  authors: Author[];
  discount?: Discount;
  creationDate : Date;
  dateOfLastModification: Date;
}
