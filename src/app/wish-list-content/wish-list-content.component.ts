import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../model/Comic';
import { WishList } from '../model/WishList';

@Component({
  selector: 'app-wish-list-content',
  templateUrl: './wish-list-content.component.html',
  styleUrls: ['./wish-list-content.component.css']
})
export class WishListContentComponent implements OnInit {

  private _wishList!: WishList;

  get wishList() { return this._wishList; }

  @Input()
  set wishList(w: WishList){
    this._wishList=w;
    this.getComics();
  }

  comics!: Comic[];

  constructor() { }

  ngOnInit(): void {
    this.mockData();
  }

  increase(s: string): string{
    return String(parseInt(s)+1);
  }

  decrease(s: string): string{
    return String(parseInt(s)-1);
  }

  getComics(){
    //invoke rest call to get comics belong to the wishList
  }

  mockData() {
    this._wishList = {
      id: 0,
      name: "Prova",
      "creationDate": new Date("2022-09-08T19:31:18.758+00:00")
    }
    this.comics = [
      {
        "id": 1,
        "collection": {
          "name": "L'attacco dei Giganti",
          "id": 1,
          "price": 7.19,
          "yearOfRelease": 2019,
          "formatAndBinding": "Brossurato",
          "color": false,
          "description": "Ecco la descrizione",
          "categories": [],
          "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
          "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
        },
        "number": 1,
        "quantity": 17,
        "pages": 55,
        "isbn": "565582492-2",
        "publicationDate": new Date("2022-05-11"),
        "description": "Guarda questa è una descrizione molto lunga di questo fumetto che racconta di un vecchio al mare. I vecchi sono sempre al mare.",
        "authors": [
          {
            id: 1,
            name: "Giovan",
            biography: "",
            "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
          },
          {
            id: 2,
            name: "Nino",
            biography: "",
            "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
          }
        ],
        "creationDate": new Date("2022-09-08T19:41:43.354+00:00"),
        "dateOfLastModification": new Date("2022-09-08T19:41:43.354+00:00")
      },
      {
        "id": 2,
        "collection": {
          "name": "L'attacco dei Giganti",
          "id": 1,
          "price": 7.19,
          "yearOfRelease": 2019,
          "formatAndBinding": "Brossurato",
          "color": false,
          "description": "Ecco la descrizione",
          "categories": [],
          "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
          "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
        },
        "number": 2,
        "quantity": 0,
        "pages": 55,
        "isbn": "565582492-2",
        "publicationDate": new Date("2022-05-11"),
        "description": "Guarda questa è una descrizione molto lunga di questo fumetto che racconta di un vecchio al mare. I vecchi sono sempre al mare.",
        "authors": [
          {
            id: 1,
            name: "Giovan",
            biography: "",
            "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
          },
          {
            id: 2,
            name: "Nino",
            biography: "",
            "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
          }
        ],
        "creationDate": new Date("2022-09-08T19:41:43.354+00:00"),
        "dateOfLastModification": new Date("2022-09-08T19:41:43.354+00:00")
      }
    ];
  }

}
