import { Component } from '@angular/core';
import { WishList } from '../model/WishList';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { User } from '../model/User';
import { SessionService } from '../session.service';
import { WishListService } from '../wish-list.service';
import { Router } from '@angular/router';
import { Comic } from '../model/Comic';

@Component({
  selector: 'app-wish-lists-page',
  templateUrl: './wish-lists-page.component.html',
  styleUrls: ['./wish-lists-page.component.css'],
})
export class WishListsPageComponent {

  user?: User;

  wishLists: WishList[] = [];

  constructor(
    public dialog: MatDialog,
    private sessionService: SessionService,
    private wishListService: WishListService,
    private router: Router
  ) {
    this.sessionService.currentUser.subscribe((user) => (this.user = user));
    this.getLists();
  }

  showListContent(list: WishList) {
    this.router.navigateByUrl('wish-list/content', {
      state: { wishList: list }
    });
  }

  getLists() {
    if (this.user == undefined) throw new Error('Errore imprevisto');
    this.wishListService.getByUser(this.user.id).subscribe({
      next: (response: WishList[]) => {
        this.wishLists = response;
      },
    });
  }

  createList() {
    let dialogRef = this.dialog.open(InputDialogComponent, {
      data: { titleMessage: 'Nuova lista desideri', fieldName: 'Nome' },
    });
    dialogRef.afterClosed().subscribe((name) => {
      if (this.user == undefined) throw new Error('Errore imprevisto');
      this.wishListService.create(this.user.id, name).subscribe({
        next: (w: WishList) => {
          this.wishLists.push(w);
        },
      });
    });
  }

  renameList(list: WishList) {
    let dialogRef = this.dialog.open(InputDialogComponent, {
      data: {
        titleMessage: 'Rinomina "' + list.name + '"',
        fieldName: 'Nuovo nome',
      },
    });
    dialogRef.afterClosed().subscribe((newName) => {
      if (this.user == undefined) throw new Error('Errore imprevisto');
      this.wishListService
        .changeName(this.user.id, list.id, newName)
        .subscribe({
          next: () => {
            list.name = newName;
          },
        });
    });
  }

  deleteList(list: WishList) {
    if (this.user == undefined) throw new Error('Errore imprevisto');
    this.wishListService.delete(this.user.id, list.id).subscribe({
      next: () => {
        let index = this.wishLists.indexOf(list);
        this.wishLists.splice(index, 1);
      },
    });
  }

}
