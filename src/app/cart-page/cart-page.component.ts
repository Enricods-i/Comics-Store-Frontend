import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddToListDialogComponent } from '../add-to-list-dialog/add-to-list-dialog.component';
import { CartService } from '../cart.service';
import { ProblemCode } from '../common/ProblemCode';
import { Cart } from '../model/Cart';
import { CartContent } from '../model/CartContent';
import { Comic } from '../model/Comic';
import { User } from '../model/User';
import { PurchaseService } from '../purchase.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {

  user?: User;
  cart?: Cart;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService,
    private purchaseService: PurchaseService,
    private addToListDialog: MatDialog
  )
  {
    this.sessionService.currentUser.subscribe(user => this.user = user);
    this.sessionService.currentCart.subscribe(cart => this.cart = cart);
  }

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  increaseQuantity(cc: CartContent) {
    if (this.user == undefined){
      this.showMessage("Errore interno.");
      return;
    }
    this.cartService.changeQuantity(this.user.id, cc.comic.id, cc.quantity+1).subscribe({
      next: () => {
        if (this.cart == undefined ){
          this.showMessage("Errore interno.");
          return;
        }
        cc.quantity++;
        this.cart.size++;
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.COMIC_QUANTITY_UNAVAIABLE) this.showMessage("Quantià non disponibile!");
        else console.error(problem.error[0]);
      }
    });
  }

  decreaseQuantity(cc: CartContent) {
    if (this.user == undefined){
      this.showMessage("Errore interno.");
      return;
    }
    this.cartService.changeQuantity(this.user.id, cc.comic.id, cc.quantity-1).subscribe({
      next: () => {
        if (this.cart == undefined ){
          this.showMessage("Errore interno.");
          return;
        }
        cc.quantity--;
        this.cart.size--;
      }
    });
  }

  removeComic(cc: CartContent) {
    if (this.user == undefined){
      this.showMessage("Errore interno.");
      return;
    }
    this.cartService.deleteComic(this.user.id, cc.comic.id).subscribe({
      next: () => {
        if (this.cart == undefined ){
          this.showMessage("Errore interno.");
          return;
        }
        let index = this.cart.content.indexOf(cc);
        this.cart.content.splice(index, 1);
        this.cart.size -= cc.quantity;
      }
    });
  }

  addToList(c: Comic){
    this.addToListDialog.open(AddToListDialogComponent, {
      data: { comic: c }
    });
  }

  buy(){
    if (this.user == undefined){
      this.showMessage("Errore interno.");
      return;
    }
    this.purchaseService.create(this.user.id).subscribe({
      next: () => {
        if (this.cart == undefined ){
          this.showMessage("Errore interno.");
          return;
        }
        this.cart.content = [];
        this.cart.size = 0;
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.COMIC_QUANTITY_UNAVAIABLE) this.showMessage("Quantià non disponibile!");
        else console.error(problem.error[0]);
      }
    });
  }

}
