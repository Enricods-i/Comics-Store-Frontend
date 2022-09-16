import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './common/GlobalConstants';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = GlobalConstants.API_BASE_URL + "/users";

  constructor(private http: HttpClient) { }

  getByEmail(email: string): Observable<User> {
    return this.http.get<User>(
      this.BASE_URL + '/byEmail?email=' + email
    );
  }

  create(user: User): Observable<any> {
    return this.http.post<User>(
      this.BASE_URL + '/create',
      user
    );
  }

  update(user: User): Observable<any> {
    return this.http.put<User>(
      this.BASE_URL + '/update',
      user
    );
  }

}
