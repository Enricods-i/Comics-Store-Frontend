import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../model/Purchase';

@Component({
  selector: 'app-purchases-page',
  templateUrl: './purchases-page.component.html',
  styleUrls: ['./purchases-page.component.css']
})
export class PurchasesPageComponent implements OnInit {

  @Input()
  purchases!: Purchase[];

  constructor() { }

  ngOnInit(): void {
    this.mockData();
  }

  mockData(){
    this.purchases = [
      {
        id: 0,
        user: {
          id: 0,
          firstName: "Giordano",
          lastName: "Bruno",
          birthDate: new Date("2022-09-08T19:31:18.837+00:00"),
          email: "nonmipiaceilfuoco@alrogo.it",
          phoneNumber: "3334445556",
          city: "Nola",
          creationDate: new Date("2022-09-08T19:31:18.837+00:00")
        },
        total: 60,
        content: [
          {
            id: 0,
            comic:
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
            quantity: 1,
            price: 40,
            discount:
              {
                id: 0,
                name: "Sconto primaverile",
                percentage: 30,
                activationDate: new Date("2022-09-08T19:31:18.758+00:00"),
                expirationDate: new Date("2022-09-08T19:31:18.758+00:00"),
                creationDate: new Date("2022-09-08T19:31:18.758+00:00"),
                dateOfLastModification: new Date("2022-09-08T19:31:18.758+00:00")
              }
          },
          {
            id: 1,
            comic:
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
            quantity: 1,
            price: 20
          }
        ],
        creationDate: new Date("2022-09-08T19:31:18.837+00:00")
      },
      {
        id: 0,
        user: {
          id: 0,
          firstName: "Giordano",
          lastName: "Bruno",
          birthDate: new Date("2022-09-08T19:31:18.837+00:00"),
          email: "nonmipiaceilfuoco@alrogo.it",
          phoneNumber: "3334445556",
          city: "Nola",
          creationDate: new Date("2022-09-08T19:31:18.837+00:00")
        },
        total: 40,
        content: [
          {
            id: 1,
            comic:
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
            quantity: 1,
            price: 20
          }
        ],
        creationDate: new Date("2022-09-08T19:31:18.837+00:00")
      }
    ]
  }

}
