import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Collection } from './model/Collection';

@Injectable()
export class CollectionService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/collections";

  constructor(private http: HttpClient) { }

  getRecent(): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/news'
    );
  }

  getByName(name: string, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byName?name=' + name +
      '&pageNumber=' + pageNumber +
      '&pageSize=' + 9
    );
  }

  getByCategory(categoryId: number, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byCategory?ctgr=' + categoryId +
      '&pageNumber=' + pageNumber +
      '&pageSize=' + 9
    );
  }

  getByAuthor(authorId: number, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byAuthor?auth=' + authorId +
      '&pageNumber=' + pageNumber +
      '&pageSize=' + 9
    );
  }

  advancedSearch(name: string | null, categoryName: string | null, authorName: string | null, pageNumber: number = 0): Observable<Collection[]> {
    let url: string = this.BASE_URL + '/v/search?pageSize=9';
    if(name!=null){
      url = url.concat('&name=', name);
    }
    if(categoryName!=null){
      url = url.concat('&ctgr=',categoryName);
    }
    if(authorName!=null){
      url = url.concat('&auth=',authorName);
    }
    return this.http.get<Collection[]>(url + '&pageNumber=' + pageNumber);
  }

}
