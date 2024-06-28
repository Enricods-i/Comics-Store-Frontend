import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProblemCode } from '../common/ProblemCode';
import { Comic } from '../model/Comic';
import { User } from '../model/User';
import { WishList } from '../model/WishList';
import { SessionService } from '../session.service';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-add-to-list-dialog',
  templateUrl: './add-to-list-dialog.component.html',
  styleUrls: ['./add-to-list-dialog.component.css'],
})
export class AddToListDialogComponent {
  user?: User;

  targetComic?: Comic; //?

  newList: boolean = false;
  wishLists: WishList[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddToListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sessionService: SessionService,
    private wishListService: WishListService,
    private snackBar: MatSnackBar
  ) {
    this.sessionService.currentUser.subscribe((user) => {
      this.user = user;
      this.getLists();
    });
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, undefined, { duration: 5000 });
  }

  getLists() {
    if (this.user == undefined) {
      throw new Error('Errore imprevisto.');
    }
    this.wishListService.getByUser(this.user.id).subscribe({
      next: (response: WishList[]) => {
        this.wishLists = response;
      },
    });
  }

  createList(name: string) {
    if (this.user == undefined) throw new Error('Errore imprevisto');
    this.wishListService.create(this.user.id, name).subscribe({
      next: (w: WishList) => {
        this.wishLists.push(w);
        this.newList = false;
      },
    });
  }

  addComicToList(l: WishList) {
    if (this.user == undefined) {
      throw new Error('Errore imprevisto.');
    }
    this.wishListService
      .addComic(l.id, this.user.id, this.data.comic.id)
      .subscribe({
        next: () => {
          this.showMessage('Il fumetto è stato aggiunto alla lista!');
          this.dialogRef.close();
        },
        error: (problem: HttpErrorResponse) => {
          if (problem.error[0].code == ProblemCode.COMIC_ALREADY_IN_LIST)
            this.showMessage('Il fumetto è già nella lista!');
          else console.error(problem.error[0]);
        },
      });
  }
}
