import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Category } from '../model/Category';
import { Collection } from '../model/Collection';
import { DesktopViewLayoutConfig } from './desktop-view/desktop-view-layout-config';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],
})
export class CollectionListComponent {

  @Input() collections: Collection[] = [];

  mobile_view: boolean

  desktopViewLayoutConfig: DesktopViewLayoutConfig = {
    // meaningless initialization
    // there has to be a better solution!
    'gridCols': 0,
    'gridMaxWidthPx': 0,
    'gridRowHeightPx': 0,
    'cardMaxWidthPx': 0
  }

  configDesktopLayout(viewportSize: String) {
    switch(viewportSize){
      case Breakpoints.Small:
        this.desktopViewLayoutConfig.gridCols = 2;
        this.desktopViewLayoutConfig.gridMaxWidthPx = 700;
        this.desktopViewLayoutConfig.cardMaxWidthPx = 230;
        this.desktopViewLayoutConfig.gridRowHeightPx = 500;
        break;
      case Breakpoints.Medium:
        this.desktopViewLayoutConfig.gridCols = 3;
        this.desktopViewLayoutConfig.gridMaxWidthPx = 900;
        this.desktopViewLayoutConfig.cardMaxWidthPx = 250;
        this.desktopViewLayoutConfig.gridRowHeightPx = 542;
        break;
      case Breakpoints.Large:
        this.desktopViewLayoutConfig.gridCols = 4;
        this.desktopViewLayoutConfig.gridMaxWidthPx = 1300;
        this.desktopViewLayoutConfig.cardMaxWidthPx = 300;
        this.desktopViewLayoutConfig.gridRowHeightPx = 650;
        break;
    }
  }

  constructor(private router: Router, breakpointObserver: BreakpointObserver) {
    // check the current viewport size
    if (breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.mobile_view = true
    }
    else if (breakpointObserver.isMatched(Breakpoints.Small)) {
      this.mobile_view = false
      this.configDesktopLayout(Breakpoints.Small)
    }
    else if (breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.mobile_view = false
      this.configDesktopLayout(Breakpoints.Medium)
    }
    // if viewport size is bigger than Breakpoints.Large still use the configDesktopLayout(Breakpoints.Large) function
    else {
      this.mobile_view = false
      this.configDesktopLayout(Breakpoints.Large)
    }

    // get an observable to be aware of viewport size changes
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(
      result => this.updateLayout(result)
    )
  }

  updateLayout(bs: BreakpointState) {
    for (const query of Object.keys(bs.breakpoints)) {
      if(bs.breakpoints[query]) {
        switch (query) {
          case Breakpoints.XSmall:
            this.mobile_view = true;
            break;
          case Breakpoints.Small:
            this.mobile_view = false;
            this.configDesktopLayout(Breakpoints.Small);
            break;
          case Breakpoints.Medium:
            this.mobile_view = false;
            this.configDesktopLayout(Breakpoints.Medium);
            break;
          case Breakpoints.Large:
            this.mobile_view = false;
            this.configDesktopLayout(Breakpoints.Large);
            break;
        }
      }
    }
  }

  showComics(c: Collection) {
    this.router.navigateByUrl('catalog/collection', { state: {collection: c}});
  }

  showCategory(c: Category){
    this.router.navigateByUrl('catalog/category', { state: {category: c}});
  }

}
