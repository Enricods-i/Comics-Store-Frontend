import { Comic } from "./Comic";
import { Discount } from "./Discount";

export interface ComicInPurchase {
  id: number;
  comic: Comic;
  quantity: number;
  price: number;
  discount?: Discount;
}
