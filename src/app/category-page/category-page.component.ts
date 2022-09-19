import { Component, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Category } from '../model/Category';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {

  category?: Category;

  currentPage: number = 1;
  collections: Collection[] = [];

  constructor(
    private collectionService: CollectionService
  )
  {
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

}
