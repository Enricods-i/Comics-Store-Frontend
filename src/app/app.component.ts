import { Component, HostListener, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  private _user!: User;

  get user(): User {
    return this._user;
  }

  set user(u: User) {
    this._user = structuredClone(u);
    this.getCart();
  }

  cart!: Cart;

  innerHeight: any;

  constructor(
    public loginDialog: MatDialog,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.innerHeight = window.innerHeight;
  }

  openLoginDialog() {
    let dialogRef = this.loginDialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((usr) => {
      this.user = usr;
    });
  }

  getCart() {
    this.cartService.get(this.user.id).subscribe({
      next: (response: any) => {
        this.cart = structuredClone(response);
      },
    });
  }

  getCartContent(): CartContent[] {
    if (this.cart !== undefined) return this.cart.content;
    else return [];
  }
}
