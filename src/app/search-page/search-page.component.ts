import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../model/Collection';
import { QueryStructure } from '../model/QueryStructure';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnDestroy {

  navigationSubscription;

  query?: QueryStructure = undefined;

  currentPage: number = 1;
  collections: Collection[] = [];

  constructor(
    private router: Router,
    private collectionService: CollectionService
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
    //Reset variables
    this.query = history.state.query;
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
    if (this.query == undefined) return;
    if (this.query.collectionName && !this.query.authorName && !this.query.categoryName){
      //Simple search
      this.collectionService.getByName(this.query.collectionName, this.currentPage-1).subscribe({
        next: (response: Collection[]) => {
          this.collections = response;
        }
      });
    }
    else{
      //Advanced Search
      this.collectionService.advancedSearch(
        this.query.collectionName ? this.query.collectionName : null,
        this.query.categoryName ? this.query.categoryName : null,
        this.query.authorName ? this.query.authorName : null,
        this.currentPage-1
      ).subscribe({
        next: (response: Collection[]) => {
          this.collections = response;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
