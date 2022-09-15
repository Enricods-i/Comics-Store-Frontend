import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QueryStructure } from '../model/QueryStructure';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  query: QueryStructure = {
    collectionName: '',
    authorName: '',
    categoryName: ''
  };

  advancedSearch: boolean = false;
  focusOnFields: boolean[] = [false, false, false];

  @Output() queryEmitter = new EventEmitter<QueryStructure>();

  constructor(private _snackBar: MatSnackBar){}

  setFieldFocus(index: number, value: boolean) {
    this.focusOnFields[index] = value;
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

  onSubmit() {
    if (
      (this.query.collectionName.length > 0 && this.query.collectionName.length < 3) ||
      (this.query.authorName.length > 0 && this.query.authorName.length < 3) ||
      (this.query.categoryName.length > 0 && this.query.categoryName.length < 3)
    ) {
      this._snackBar.open("Inserire almeno 3 caratteri", undefined, {duration:5000})
      return;
    }
    this.queryEmitter.emit(this.query);
  }

}
