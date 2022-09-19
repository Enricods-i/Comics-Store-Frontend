import { ComicInPurchase } from "./ComicInPurchase";
import { User } from "./User";

export interface Purchase {
  id: number;
  user: User;
  total: number;
  purchasedComics: ComicInPurchase[];
  creationDate: Date;
}
