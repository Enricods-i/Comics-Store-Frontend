import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private _user = new BehaviorSubject<User | undefined>(undefined);
  currentUser = this._user.asObservable();

  constructor() { }

  updateUser(u: User | undefined){
    this._user.next(u);
  }

}
