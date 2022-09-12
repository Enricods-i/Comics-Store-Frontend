import { Component } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /* Login field */
  loginEmail: string;

  /* registration Fields */
  registrationUser: User;
  registrationMaxDate: Date;


  constructor() {
    this.loginEmail = "";
    this.registrationMaxDate = new Date();
    this.registrationMaxDate.setFullYear(this.registrationMaxDate.getFullYear()-18);
    this.registrationUser =
    {
      id: 0,
      name: "",
      surname: "",
      birthDate: this.registrationMaxDate,
      email: "",
      phoneNumber: "",
      city: ""
    }
  }

}
