import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { Cart } from './model/Cart';
import { CartContent } from './model/CartContent';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private _user!: User;

  get user(): User {
    return this._user;
  }

  set user(u: User) {
    this._user = structuredClone(u);
    this.getCart();
  }

  cart!: Cart;

  constructor(public loginDialog: MatDialog, private cartService: CartService) {
    /* this.user = {
      "id": 7,
      "firstName": "Florencia",
      "lastName": "Loddon",
      "birthDate": new Date("1993-04-19"),
      "email": "floddon6@wikispaces.com",
      "phoneNumber": undefined,
      "city": "Muḩradah",
      "creationDate": new Date("2022-09-08T19:31:09.825+00:00"),
      "dateOfLastModification": new Date("2022-09-08T19:31:09.825+00:00")
    } */
  }

  openLoginDialog(){
    let dialogRef = this.loginDialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      usr => {
        this.user = usr;
      }
    )
  }

  getCart(){
    this.cartService.get(this.user.id).subscribe({
      next: (response: any) => {
        this.cart = structuredClone(response);
      }
    });
  }

  getCartContent(): CartContent[] {
    if(this.cart!==undefined)
      return this.cart.content;
    else
      return [];
  }

}
