import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from 'src/app/model/Category';
import { Collection } from 'src/app/model/Collection';

@Component({
  selector: 'mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.css'
})
export class MobileViewComponent {

  @Input() collectionList: Collection[] = []

  constructor(private router: Router) { }

  showComics(c: Collection) {
    this.router.navigateByUrl('catalog/collection', { state: { collection: c } });
  }

  showCategory(c: Category) {
    this.router.navigateByUrl('catalog/category', { state: { category: c } });
  }
  
}
