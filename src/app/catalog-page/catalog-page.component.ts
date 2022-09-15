import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../model/Collection';
import { Comic } from '../model/Comic';
import { QueryStructure } from '../model/QueryStructure';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  @Input()
  collection!: Collection;

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

  mockData(){
    this.collection = {
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
    };
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

  /* search(query: QueryStructure){
    let count: number = 0;
    if(query.authorName) count++;
    if(query.categoryName) count++;
    if(query.collectionName) count++;
    if(count==0) return; //blanck query?!
    if(count>=2)
      console.log("Ciao");//advenced search
    else{ //simple searchs
      if (query.authorName) console.log(); //author search
      else if (query.categoryName) console.log(); //categpry search
      else console.log(); //collection search
    }
  } */

}
