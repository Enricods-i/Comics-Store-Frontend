import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private userService: UserService) {
    this.loginEmail = "";
    this.registrationMaxDate = new Date();
    this.registrationMaxDate.setFullYear(this.registrationMaxDate.getFullYear()-18);
    this.registrationUser =
    {
      id: 0,
      firstName: "",
      lastName: "",
      birthDate: this.registrationMaxDate,
      email: "",
      phoneNumber: "",
      city: ""
    }
  }

  login(){
    this.userService.getByEmail(this.loginEmail).subscribe({
      next: (response: User) => {
        this.dialogRef.close(response);
      },
      error: (response: HttpErrorResponse) => {
        if(response.error[0].code == ProblemCode.USER_NOT_FOUND) this.errorMessage="E-mail non valida";
        else console.error(response.error[0]);
      },
    });
  }

}
