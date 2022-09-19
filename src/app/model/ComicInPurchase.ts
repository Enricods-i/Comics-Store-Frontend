import { Comic } from "./Comic";
import { Discount } from "./Discount";

export interface ComicInPurchase {
  id: number;
  comic: Comic;
  quantity: number;
  comicPrice: number;
  discountsApplied: Discount[];
}
