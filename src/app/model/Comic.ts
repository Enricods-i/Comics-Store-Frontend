import { Author } from "./Author";
import { Collection } from "./Collection";

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
  creationDate : Date;
  dateOfLastModification: Date;
}
