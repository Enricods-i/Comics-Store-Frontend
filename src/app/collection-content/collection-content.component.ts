import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddToListDialogComponent } from '../add-to-list-dialog/add-to-list-dialog.component';
import { CartService } from '../cart.service';
import { ComicService } from '../comic.service';
import { ProblemCode } from '../common/ProblemCode';
import { Cart } from '../model/Cart';
import { Collection } from '../model/Collection';
import { Comic } from '../model/Comic';
import { User } from '../model/User';
import { SessionService } from '../session.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Author } from '../model/Author';

@Component({
  selector: 'collection-content',
  templateUrl: './collection-content.component.html',
  styleUrls: ['./collection-content.component.css']
})
export class CollectionContentComponent {

  user?: User;
  cart?: Cart;

  collection?: Collection;

  numberOfComics: number = 0;

  pageIndex: number = 0;
  pageSize: number = 10;

  comics: Comic[] = [];

  constructor(
              private comicService: ComicService,
              private sessionService: SessionService,
              private cartService: CartService,
              private snackBar: MatSnackBar,
              private addToListDialog: MatDialog,
              private router: Router
            )
  {
    this.sessionService.currentUser.subscribe(user => this.user = user);
    this.sessionService.currentCart.subscribe(cart => this.cart = cart);
    this.collection = history.state.collection;

    if (this.collection != undefined) {

      this.comicService.getSizeOfCollection(this.collection.id).subscribe({
        next: (response: number) => this.numberOfComics = response
      });

      this.comicService.getByCollection(this.collection.id).subscribe({
        next: (response: Comic[]) => {
          this.comics = response;
        }
      });

    }
  }// constructor


  handlePageEvent(pageEvent: PageEvent){

    if(this.collection != undefined &&
      (this.pageIndex != pageEvent.pageIndex ||
      this.pageSize != pageEvent.pageSize)
    )
    {
      this.pageIndex = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
      this.comicService.getByCollection(this.collection.id, pageEvent.pageIndex, pageEvent.pageSize).subscribe({
        next: (response: Comic[]) => {
          this.comics = response;
        }
      });
    }
    
  }


  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
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


  showAuthor(a: Author) {
    this.router.navigateByUrl('catalog/author', { state: { author: a } });
  }

}
