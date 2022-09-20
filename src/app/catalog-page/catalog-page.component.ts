import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddToListDialogComponent } from '../add-to-list-dialog/add-to-list-dialog.component';
import { CartService } from '../cart.service';
import { ComicService } from '../comic.service';
import { ProblemCode } from '../common/ProblemCode';
import { Cart } from '../model/Cart';
import { Collection } from '../model/Collection';
import { Comic } from '../model/Comic';
import { User } from '../model/User';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent {

  user?: User;
  cart?: Cart;

  collection?: Collection;

  currentPage: number = 1;
  comics: Comic[] = [];

  constructor(
    private comicService: ComicService,
    private sessionService: SessionService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private addToListDialog: MatDialog
  )
  {
    this.sessionService.currentUser.subscribe(user => this.user = user);
    this.sessionService.currentCart.subscribe(cart => this.cart = cart);
    this.collection = history.state.collection;
    this.getComics();
  }

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  getComics(){
    if (this.collection == undefined){
      this.showMessage("Errore interno");
      return;
    }
    this.comicService.getByCollection(this.collection.id, this.currentPage-1).subscribe({
      next: (response: Comic[]) => {
        this.comics = response;
      }
    });
  }

  previousPage(){
    this.currentPage--;
    this.getComics();
  }

  nextPage() {
    this.currentPage++;
    this.getComics();
  }

  addToCart(c: Comic, q: number){
    if (this.user == undefined){
      this.showMessage("Errore interno");
      return;
    }
    this.cartService.addComic(this.user.id, c.id, q).subscribe({
      next: () => {
        if(this.cart == undefined) return;
        this.cart.content.push({
          quantity: q,
          comic: c
        });
        this.cart.size+=q;
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.COMIC_QUANTITY_UNAVAIABLE) this.showMessage("Quantità non disponibile");
        else if(problem.error[0].code == ProblemCode.COMIC_ALREADY_IN_CART){
          this.showMessage("Fumetto già nel carrello")
        }
        else console.error(problem.error[0]);
      }
    });
  }

  addToList(c: Comic){
    this.addToListDialog.open(AddToListDialogComponent, {
      data: { comic: c }
    });
  }

}
