import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';
import { Cart } from './model/Cart';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _cart = new BehaviorSubject<Cart | undefined>(undefined);
  private _user = new BehaviorSubject<User | undefined>(undefined);

  currentUser = this._user.asObservable();
  currentCart = this._cart.asObservable();

  constructor(private cartService: CartService) { }

  updateUser(u: User | undefined){
    this._user.next(u);
  }

  updateCart(c: Cart | undefined){
    this._cart.next(c);
  }

}
