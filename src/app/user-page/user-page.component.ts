import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProblemCode } from '../common/ProblemCode';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  private _user!: User;

  get user() { return this._user; }

  @Input()
  set user(u: User){
    this._user = structuredClone(u);
    this.newUser = structuredClone(u);
  }

  @Output()
  userChanged: EventEmitter<User> = new EventEmitter<User>();

  modifying: boolean = false;
  newUser!: User;

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  resetNewUser(){
    this.newUser = structuredClone(this.user);
    this.modifying = false;
  }

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  update() {
    this.userService.update(this.newUser).subscribe({
      next: (response: User) => {
        this.user=response;
        this.modifying = false;
        this.showMessage("Profilo utente aggiornato!");
        this.userChanged.emit(this.user);
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.USER_ALREADY_EXISTS) this.showMessage("Esiste già un utente resistrato con questa e-mail");
        else console.error(problem.error[0]);
      }
    });
  }

  mockData() {
    this._user = {
      id: 0,
      firstName: "Giordano",
      lastName: "Bruno",
      birthDate: new Date("2022-09-08T19:31:18.837+00:00"),
      email: "nonmipiaceilfuoco@alrogo.it",
      phoneNumber: "3334445556",
      city: "Nola",
      creationDate: new Date("2022-09-08T19:31:18.837+00:00")
    }
  }

}
