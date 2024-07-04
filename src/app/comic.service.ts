import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { Comic } from './model/Comic';

@Injectable()
export class ComicService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/comics";

  constructor(private http: HttpClient) { }

  getSizeOfCollection(collectionId: number): Observable<number> {
    return this.http.get<number>(
      this.BASE_URL + '/size/byCollection?cllctn=' +collectionId
    );
  }

  getByCollection(collectionId: number, pageNumber: number = 0, pageSize: number = 20): Observable<Comic[]> {
    return this.http.get<Comic[]>(
      this.BASE_URL + '/v/byCollection?cllctn=' + collectionId +
      '&pageNumber=' + pageNumber + 
      '&pageSize=' + pageSize
    );
  }

}
