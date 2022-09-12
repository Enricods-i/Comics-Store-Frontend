import { Component } from '@angular/core';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Comics Store';

  user!: User;

  constructor() {
    this.user = {
      id: 2,
      name: 'pippo',
      surname: 'pluto',
      birthDate: new Date(),
      email: 'ciaocioi',
      creationDate: new Date(),
      dateOfLastModification: new Date(),
    };
  }
}
