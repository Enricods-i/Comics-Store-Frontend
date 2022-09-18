import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Collection } from './model/Collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/collections";

  constructor(private http: HttpClient) { }

  getByName(name: string, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byName?name=' + name +
      '&pageNumber=' + pageNumber
    );
  }

  getByCategory(categoryId: number): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byCategory?ctgr=' + categoryId
    );
  }

  getByAuthor(authorId: number): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byAuthor?auth=' + authorId
    );
  }

  advancedSearch(name: string | null, categoryName: string | null, authorName: string | null, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL +
      '/v/search?ctgr=' + categoryName +
      '&auth=' + authorName +
      '&name=' + name +
      '&pageNumber=' + pageNumber
    );
  }

}
