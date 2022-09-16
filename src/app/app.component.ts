import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  user!: User;

  constructor(public loginDialog: MatDialog) { }

  openLoginDialog(){
    let dialogRef = this.loginDialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      usr => {
        this.user=usr;
      }
    )
  }

  log(foo: any){
    console.log(foo);
  }

  mockData() {
    this.user = {
      id: 2,
      firstName: 'pippo',
      lastName: 'pluto',
      birthDate: new Date(),
      email: 'ciaocioi',
      creationDate: new Date(),
      dateOfLastModification: new Date(),
    };
  }

}
