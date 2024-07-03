import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Collection } from 'src/app/model/Collection';
import { Category } from 'src/app/model/Category';
import { DesktopViewLayoutConfig } from './desktop-view-layout-config';

@Component({
  selector: 'desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.css'
})
export class DesktopViewComponent {

  @Input() collectionList: Collection[] = []

  @Input() layoutConfig: DesktopViewLayoutConfig | undefined

  constructor(private router: Router) {}

  showComics(c: Collection) {
    this.router.navigateByUrl('catalog/collection', { state: { collection: c } });
  }

  showCategory(c: Category) {
    this.router.navigateByUrl('catalog/category', { state: { category: c } });
  }

}
