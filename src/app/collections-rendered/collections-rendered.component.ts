import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-collections-rendered',
  templateUrl: './collections-rendered.component.html',
  styleUrls: ['./collections-rendered.component.css'],
})
export class CollectionsRenderedComponent implements OnInit {
  @Input() collections!: Collection[];

  @Output() collectionSelected = new EventEmitter<Collection>();

  constructor() {}

  ngOnInit(): void {
  }

  handleClick(c: Collection){
    this.collectionSelected.emit(c);
  }

  mockData(){
    this.collections = [
      {
        name: "Amazing Spider-Man: The Night Gwen Stacy Died",
        id: 18,
        price: 2.94,
        yearOfRelease: 2017,
        formatAndBinding: null,
        color: false,
        description: "description",
        categories: [],
        creationDate: new Date("2022-09-08T19:31:18.837+00:00"),
        dateOfLastModification: new Date("2022-09-08T19:31:18.837+00:00")
      },
      {
        "name": "Ratman",
        "id": 15,
        "price": 8.66,
        "yearOfRelease": 2018,
        "formatAndBinding": null,
        "color": false,
        "description": "description",
        "categories": [],
        "creationDate": new Date("2022-09-08T19:31:18.824+00:00"),
        "dateOfLastModification": new Date("2022-09-08T19:31:18.824+00:00")
      },
      {
        "name": "Superior Spider-Man",
        "id": 21,
        "price": 6.0,
        "yearOfRelease": 2013,
        "formatAndBinding": "Brossurato 17x26",
        "color": true,
        "description": "Peter Parker has spent a lifetime living up to the responsibilities his powers foisted upon him but his Amazing story finally ends dramatically in the historic Spider-Man #700. NOW! the new Spider-Man has arrived and he is better in every single way. Smarter, stronger...Superior.",
        "categories": [
          {
            "name": "Supereroi",
            "id": 8,
            "creationDate": new Date("2022-09-08T19:45:33.528+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:45:33.528+00:00")
          },
          {
            "name": "Fumetto Americano",
            "id": 3,
            "creationDate": new Date("2022-09-08T19:45:33.508+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:45:33.508+00:00")
          },
          {
            "name": "Azione",
            "id": 4,
            "creationDate": new Date("2022-09-08T19:45:33.512+00:00"),
            "dateOfLastModification": new Date("2022-09-08T19:45:33.512+00:00")
          }
        ],
        "creationDate": new Date("2022-09-09T10:35:16.076+00:00"),
        "dateOfLastModification": new Date("2022-09-09T10:42:45.875+00:00")
      }
  ];
  }
}
