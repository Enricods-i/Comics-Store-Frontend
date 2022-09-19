import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProblemCode } from '../common/ProblemCode';
import { User } from '../model/User';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user?: User;

  modifying: boolean = false;
  newUser?: User;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private sessionService: SessionService
  )
  { }

  ngOnInit(): void {
    //User updates
    this.sessionService.currentUser.subscribe(usr => this.user=usr);
  }

  modify(){
    this.newUser = structuredClone(this.user);
    this.modifying = true;
  }

  resetNewUser(){
    this.newUser = structuredClone(this.user);
    this.modifying = false;
  }

  showMessage(msg: string){
    this.snackBar.open(msg, undefined, {duration: 5000});
  }

  update() {
    if (this.newUser == undefined){
      this.showMessage("Errore interno");
      return;
    }
    this.userService.update(this.newUser).subscribe({
      next: (response: User) => {
        this.user=response;
        this.modifying = false;
        this.showMessage("Profilo utente aggiornato!");
        this.sessionService.updateUser(this.user);
      },
      error: (problem: HttpErrorResponse) => {
        if(problem.error[0].code == ProblemCode.USER_ALREADY_EXISTS) this.showMessage("Esiste già un utente resistrato con questa e-mail");
        else console.error(problem.error[0]);
      }
    });
  }

}
