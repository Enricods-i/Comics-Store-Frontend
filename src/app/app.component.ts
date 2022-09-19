import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { Cart } from './model/Cart';
import { CartContent } from './model/CartContent';
import { User } from './model/User';
import { UserSessionService } from './user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user?: User;

  cart!: Cart;

  innerHeight: any;

  constructor(
    public loginDialog: MatDialog,
    private cartService: CartService,
    private userSessionService: UserSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //CSS layout
    this.innerHeight = window.innerHeight;
    //User updates
    this.userSessionService.currentUser.subscribe(usr => this.user=usr);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.innerHeight = window.innerHeight;
  }

  openLoginDialog() {
    let dialogRef = this.loginDialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((usr) => {
      this.userSessionService.updateUser(usr);
    });
  }

  //CART STUFF
  /* getCart() {
    this.cartService.get(this.user.id).subscribe({
      next: (response: any) => {
        this.cart = structuredClone(response);
      },
    });
  }

  getCartContent(): CartContent[] {
    if (this.cart !== undefined) return this.cart.content;
    else return [];
  } */

}
