import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProblemCode } from '../common/ProblemCode';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /* Login field */
  loginEmail: string;
  errorMessage: string = "";


  /* registration Fields */
  registrationUser: User;
  registrationMaxDate: Date;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private snackBar: MatSnackBar ,private userService: UserService) {
    this.loginEmail = "";
    this.registrationMaxDate = new Date();
    this.registrationMaxDate.setFullYear(this.registrationMaxDate.getFullYear()-18);
    this.registrationUser =
    {
      id: 0,
      firstName: "",
      lastName: "",
      birthDate: this.registrationMaxDate,
      email: ""
    }
  }

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  login(){
    this.userService.getByEmail(this.loginEmail).subscribe({
      next: (response: User) => {
        this.dialogRef.close(response);
      },
      error: (response: HttpErrorResponse) => {
        if(response.error[0].code == ProblemCode.USER_NOT_FOUND) this.showMessage("Non esiste un utente resistrato con questa e-mail");
        else console.error(response.error[0]);
      },
    });
  }

  signin(){
    this.userService.create(this.registrationUser).subscribe({
      next: (response: User) => {
        this.dialogRef.close(response);
      },
      error: (response: HttpErrorResponse) => {
        if(response.error[0].code == ProblemCode.USER_ALREADY_EXISTS) this.showMessage("Esiste già un utente resistrato con questa e-mail");
        else console.error(response.error[0]);
      },
    });
  }

}
