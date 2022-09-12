import { Component, EventEmitter, Output } from '@angular/core';
import { QueryStructure } from '../model/QueryStructure';

@Component({
  selector: 'app-collection-search-bar',
  templateUrl: './collection-search-bar.component.html',
  styleUrls: ['./collection-search-bar.component.css'],
})
export class CollectionSearchBarComponent {
  query: QueryStructure = {
    collectionName: '',
    authorName: '',
    categoryName: '',
  };

  advancedSearch: boolean = false;

  spanClass: string = "not-focused";

  @Output() queryEmitter = new EventEmitter<QueryStructure>();

  changeClass() {
    this.spanClass = "focused";
  }

  clearAll() {
    this.query = {
      collectionName: '',
      authorName: '',
      categoryName: '',
    };
  }

  clearField(field: number) {
    switch (field) {
      case 1:
        this.query.collectionName = '';
        break;
      case 2:
        this.query.authorName = '';
        break;
      case 3:
        this.query.categoryName = '';
        break;
      default:
        break;
    }
  }

  executeQuery() {
    this.queryEmitter.emit(this.query);
  }
}
