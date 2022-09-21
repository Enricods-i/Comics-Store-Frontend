import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Category } from '../model/Category';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnDestroy {

  navigationSubscription;

  category?: Category;

  currentPage: number = 1;
  collections: Collection[] = [];

  constructor(
    private collectionService: CollectionService,
    private router: Router
  )
  {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.reloadCollections();
      }
    });
  }

  reloadCollections(){
    this.category = history.state.category;
    this.currentPage = 1;
    this.getCollections();
  }

  previousPage(){
    this.currentPage--;
    this.getCollections();
  }

  nextPage() {
    this.currentPage++;
    this.getCollections();
  }

  private getCollections(){
    if (this.category == undefined) return;
    this.collectionService.getByCategory(this.category.id, this.currentPage-1).subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
