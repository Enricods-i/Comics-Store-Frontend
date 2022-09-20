import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { Cart } from './model/Cart';
import { CartContent } from './model/CartContent';
import { User } from './model/User';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user?: User;

  cart?: Cart;

  innerHeight: any;

  constructor(
    public loginDialog: MatDialog,
    private cartService: CartService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //CSS layout
    this.innerHeight = window.innerHeight;
    //User updates
    this.sessionService.currentUser.subscribe(usr => this.user = usr);
    //Cart updates
    this.sessionService.currentCart.subscribe(cart => this.cart = cart);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.innerHeight = window.innerHeight;
  }

  openLoginDialog() {
    let dialogRef = this.loginDialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((usr) => {
      this.sessionService.updateUser(usr);
      this.getCart();
    });
  }

  logout(){
    this.sessionService.updateUser(undefined);
    this.sessionService.updateCart(undefined);
    /* this.router.navigateByUrl(""); */
  }

  private getCart() {
    if (this.user == undefined) return;

    this.cartService.get(this.user.id).subscribe({
      next: (response: any) => {
        this.sessionService.updateCart(response);
      },
    });
  }

}
