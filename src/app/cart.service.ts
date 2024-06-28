import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Cart } from './model/Cart';

@Injectable()
export class CartService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/cart";

  constructor(private http: HttpClient) { }

  get(userId: number): Observable<Cart> {
    return this.http.get<Cart>(
      this.BASE_URL + '/get?usr=' + userId
    );
  }

  addComic(userId: number, comicId: number, quantity: number): Observable<any>{
    return this.http.patch<any>(
      this.BASE_URL + '/addcmc?usr=' + userId +
      '&cmc=' + comicId +
      '&qty=' + quantity,
      null
    );
  }

  changeQuantity(userId: number, comicId: number, newQuantity: number): Observable<any>{
     return this.http.patch<any>(
      this.BASE_URL + '/chqty?usr=' + userId +
      '&cmc=' + comicId +
      '&qty=' + newQuantity,
      null
    );
  }

  deleteComic(userId: number, comicId: number): Observable<any>{
     return this.http.patch<any>(
      this.BASE_URL + '/delcmc?usr=' + userId +
      '&cmc=' + comicId,
      null
    );
  }

}
