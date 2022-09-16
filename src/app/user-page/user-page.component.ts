import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  @Input()
  user!: User;

  modifying: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mockData() {
    this.user = {
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
