import { Component, Input, OnInit } from '@angular/core';
import { WishList } from '../model/WishList';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';

@Component({
  selector: 'app-wish-lists-page',
  templateUrl: './wish-lists-page.component.html',
  styleUrls: ['./wish-lists-page.component.css']
})
export class WishListsPageComponent implements OnInit {

  private _userId!: number;

  @Input()
  set userId(id: number){
    this._userId=id;
  }

  wishLists!: WishList[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mockData();
  }

  getLists(){
    //invoke rest call to get lists belong to the user with userId
  }

  openDialog(tMsg: string, fName: string){
    let dialogRef = this.dialog.open(InputDialogComponent, {data: {titleMessage: tMsg, fieldName: fName}});

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    )
  }

  mockData(){
    this.wishLists = [
      {
        id: 0,
        name: "Prova",
        creationDate: new Date("2022-09-08T19:31:18.758+00:00")
      },
      {
        id: 1,
        name: "Regali",
        creationDate: new Date("2022-09-08T19:31:18.758+00:00")
      },
      {
        id: 2,
        name: "Privata",
        creationDate: new Date("2022-09-08T19:31:18.758+00:00")
      }
    ]
  }

}
