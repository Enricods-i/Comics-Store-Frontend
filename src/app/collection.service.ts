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

  getByCategory(categoryId: number, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byCategory?ctgr=' + categoryId +
      '&pageNumber=' +pageNumber
    );
  }

  getByAuthor(authorId: number, pageNumber: number = 0): Observable<Collection[]> {
    return this.http.get<Collection[]>(
      this.BASE_URL + '/v/byAuthor?auth=' + authorId +
      '&pageNumber=' +pageNumber
    );
  }

  advancedSearch(name: string | null, categoryName: string | null, authorName: string | null, pageNumber: number = 0): Observable<Collection[]> {
    let url: string = this.BASE_URL + '/v/search?';
    let first: boolean = true;
    if(name!=null){
      if(first){
        url.concat('?');
        first = false;
      }
      else url.concat('&');
      url.concat('name=', name);
    }
    if(categoryName!=null){
      if(first){
        url.concat('?');
        first = false;
      }
      else url.concat('&');
      url.concat('ctgr=',categoryName);
    }
    if(authorName!=null){
      if(first){
        url.concat('?');
        first = false;
      }
      else url.concat('&');
      url.concat('auth=',authorName);
    }
    return this.http.get<Collection[]>(url + '&pageNumber=' +pageNumber);
  }

}
