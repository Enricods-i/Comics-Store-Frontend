import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/Category';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-collections-rendered',
  templateUrl: './collections-rendered.component.html',
  styleUrls: ['./collections-rendered.component.css'],
})
export class CollectionsRenderedComponent {

  @Input()
  collections: Collection[] = [];

  constructor(private router: Router) {}

  showComics(c: Collection) {
    this.router.navigateByUrl('catalog/collection', { state: {collection: c}});
  }

  showCategory(c: Category){
    this.router.navigateByUrl('catalog/category', { state: {category: c}});
  }

}
