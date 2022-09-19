import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart.service';
import { ProblemCode } from '../common/ProblemCode';
import { Cart } from '../model/Cart';
import { Comic } from '../model/Comic';
import { User } from '../model/User';
import { WishList } from '../model/WishList';
import { SessionService } from '../session.service';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-list-content',
  templateUrl: './wish-list-content.component.html',
  styleUrls: ['./wish-list-content.component.css'],
})
export class WishListContentComponent {
  user?: User;
  cart?: Cart;

  wishList?: WishList;

  currentPage: number = 1;
  comics: Comic[] = [];

  constructor(
    private wishListService: WishListService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar,
    private cartService: CartService
  ) {
    this.sessionService.currentUser.subscribe((user) => (this.user = user));
    this.sessionService.currentCart.subscribe((cart) => (this.cart = cart));
    this.wishList = history.state.wishList;
    this.getComics();
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, undefined, { duration: 5000 });
  }

  previousPage() {
    this.currentPage--;
    this.getComics();
  }

  nextPage() {
    this.currentPage++;
    this.getComics();
  }

  getComics() {
    if (this.wishList == undefined || this.user == undefined)
      throw new Error('Errore imprevisto');
    this.wishListService
      .getContent(this.wishList.id, this.user.id, this.currentPage - 1)
      .subscribe({
        next: (response: Comic[]) => {
          this.comics = response;
        },
      });
  }

  addToCart(c: Comic, q: number) {
    if (this.user == undefined) {
      throw new Error('Errore interno');
    }
    this.cartService.addComic(this.user.id, c.id, q).subscribe({
      next: () => {
        if (this.cart == undefined) return;
        this.cart.content.push({
          quantity: q,
          comic: c,
        });
        this.cart.size += q;
      },
      error: (problem: HttpErrorResponse) => {
        if (problem.error[0].code == ProblemCode.COMIC_QUANTITY_UNAVAIABLE)
          this.showMessage('Quantità non disponibile');
        else if (problem.error[0].code == ProblemCode.COMIC_ALREADY_IN_CART) {
          this.showMessage('Fumetto già nel carrello');
        } else console.error(problem.error[0]);
      },
    });
  }

  deleteComic(comic: Comic) {
    if (this.user == undefined || this.wishList == undefined)
      throw new Error('Errore imprevisto');
    this.wishListService
      .deleteComic(this.wishList.id, this.user.id, comic.id)
      .subscribe({
        next: () => {
          let index = this.comics.indexOf(comic);
          this.comics.splice(index, 1);
        },
      });
  }

}
