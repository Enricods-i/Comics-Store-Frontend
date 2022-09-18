import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Comic } from './model/Comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/comics";

  constructor(private http: HttpClient) { }

  getByCollection(collectionId: number, pageNumber: number = 0): Observable<Comic[]> {
    return this.http.get<Comic[]>(
      this.BASE_URL + '/v/byCollection?cllctn=' + collectionId +
      '&pageNumber=' + pageNumber
    );
  }

}
