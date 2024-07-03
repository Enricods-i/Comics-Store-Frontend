import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Collection } from '../model/Collection';
import { DesktopViewLayoutConfig } from './desktop-view/desktop-view-layout-config';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent {

  @Input() collections: Collection[] = [];

  mobile_view: boolean
  desktopViewLayoutConfig: DesktopViewLayoutConfig | undefined

  // the values in the function below are editable
  configDesktopLayout(viewportSize: String) {
    switch(viewportSize){
      case Breakpoints.Small:
        this.desktopViewLayoutConfig = {
          'gridCols': 2,
          'gridMaxWidthPx': 525,
          'cardMaxWidthPx': 230,
          'gridRowHeightPx': 500,
          'titleFontSizePx': 13
        }
        break;
      case Breakpoints.Medium:
        this.desktopViewLayoutConfig = {
          'gridCols': 3,
          'gridMaxWidthPx': 850,
          'cardMaxWidthPx': 250,
          'gridRowHeightPx': 542,
          'titleFontSizePx': 15
        }
        break;
      case Breakpoints.Large:
        this.desktopViewLayoutConfig = {
          'gridCols' : 4,
          'gridMaxWidthPx': 1300,
          'cardMaxWidthPx' : 300,
          'gridRowHeightPx' : 650,
          'titleFontSizePx' : 18
        }
        break;
    }
  }

  constructor(private router: Router, breakpointObserver: BreakpointObserver) {
    // check the current viewport size
    if (breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.mobile_view = true;
    }
    else if (breakpointObserver.isMatched(Breakpoints.Small)) {
      this.mobile_view = false;
      this.configDesktopLayout(Breakpoints.Small);
    }
    else if (breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.mobile_view = false;
      this.configDesktopLayout(Breakpoints.Medium);
    }
    else { // if viewport size is bigger than Breakpoints.Medium call configDesktopLayout() with Breankpoints.Large parameter
      this.mobile_view = false;
      this.configDesktopLayout(Breakpoints.Large);
    }

    // get an observable to be aware of viewport size changes
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe(
      (result) => {
        this.updateLayout(result)
      }
    );
  }

  updateLayout(bs: BreakpointState) {
    if (bs.matches) {
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
          }
          return;
        }
      }
    }
    else { // if viewport size is bigger than Breakpoints.Medium call configDesktopLayout() with Breankpoints.Large parameter
      this.mobile_view = false;
      this.configDesktopLayout(Breakpoints.Large);
    }
  }

}
