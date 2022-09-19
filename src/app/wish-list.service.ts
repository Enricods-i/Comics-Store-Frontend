import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Comic } from './model/Comic';
import { WishList } from './model/WishList';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private BASE_URL: string = GlobalConstants.API_BASE_URL + '/wishLists';

  constructor(private http: HttpClient) {}

  getByUser(userId: number): Observable<WishList[]> {
    return this.http.get<WishList[]>(
      this.BASE_URL + '/v/allByUser?usr=' + userId
    );
  }

  create(userId: number, listName: string): Observable<WishList> {
    return this.http.post<WishList>(
      this.BASE_URL + '/create?usr=' + userId + '&name=' + listName,
      null
    );
  }

  changeName(userId: number, listId: number, newName: string): Observable<any> {
    return this.http.patch(
      this.BASE_URL +
        '/chname/' +
        listId +
        '?usr=' +
        userId +
        '&name=' +
        newName,
      null
    );
  }

  delete(userId: number, listId: number): Observable<any> {
    return this.http.delete(
      this.BASE_URL + '/delete/' + listId + '?usr=' + userId
    );
  }

  getContent(listId: number, userId: number, page: number): Observable<Comic[]> {
    return this.http.get<Comic[]>(
      this.BASE_URL + '/content/' + listId + '?usr=' + userId + '&pageNumber=' + page
    );
  }

  addComic(listId: number, userId: number, comicId: number): Observable<any> {
    return this.http.patch(
      this.BASE_URL + '/addcmcs/' + listId + '?usr=' + userId,
      [comicId]
    );
  }

  deleteComic(
    listId: number,
    userId: number,
    comicId: number
  ): Observable<any> {
    return this.http.patch(
      this.BASE_URL + '/delcmcs/' + listId + '?usr=' + userId,
      [comicId]
    );
  }
}
