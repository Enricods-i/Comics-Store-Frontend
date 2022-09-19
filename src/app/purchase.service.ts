import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Purchase } from './model/Purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/purchases";

  constructor(private http: HttpClient) { }

  getByUser(userId: number, pageNumber: number): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.BASE_URL + '/byUser?usr=' + userId + '&pageNumber=' + pageNumber
    );
  }

  create(userId: number): Observable<any> {
    return this.http.post(
      this.BASE_URL + '/create?usr=' + userId,
      null
    );
  }

}
