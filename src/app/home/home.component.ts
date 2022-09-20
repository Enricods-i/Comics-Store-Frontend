import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collections: Collection[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getRecent().subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
      }
    });
  }

}
