import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../model/Comic';
import { ContextType } from './ContextType';

@Component({
  selector: 'app-comic-viewer',
  templateUrl: './comic-viewer.component.html',
  styleUrls: ['./comic-viewer.component.css']
})
export class ComicViewerComponent implements OnInit {

  @Input()
  context: ContextType = ContextType.VIEWING_CART;

  comics: Comic[] = [];

  descriptionOfComic: Comic | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    this.mockData();
  }

  mockData(){
    this.comics = [
      {
        "id": 1,
        "collection": {
          "name": "L'attacco dei Giganti",
          "id": 1,
          "price": 7.19,
          "yearOfRelease": 2019,
          "formatAndBinding": undefined,
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
          "formatAndBinding": undefined,
          "color": false,
          "description": "description",
          "categories": [],
          "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
          "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
        },
        "number": 2,
        "quantity": 15,
        "pages": 63,
        "isbn": "549401902-0",
        "publicationDate": new Date("2017-01-20"),
        "description": "description",
        "authors": [],
        "creationDate": new Date("2022-09-08T19:41:43.361+00:00"),
        "dateOfLastModification": new Date("2022-09-08T20:11:54.521+00:00")
      },
      {
        "id": 3,
        "collection": {
          "name": "L'attacco dei Giganti",
          "id": 1,
          "price": 7.19,
          "yearOfRelease": 2019,
          "formatAndBinding": undefined,
          "color": false,
          "description": "description",
          "categories": [],
          "creationDate": new Date("2022-09-08T19:31:18.758+00:00"),
          "dateOfLastModification": new Date("2022-09-08T19:31:18.758+00:00")
        },
        "number": 3,
        "quantity": 4,
        "pages": 89,
        "isbn": "742742659-2",
        "publicationDate": new Date("1999-06-16"),
        "description": "description",
        "authors": [],
        "creationDate": new Date("2022-09-08T19:41:43.366+00:00"),
        "dateOfLastModification": new Date("2022-09-08T19:41:43.366+00:00")
      }
    ]
  }

}
