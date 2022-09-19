import { Component } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Author } from '../model/Author';
import { Collection } from '../model/Collection';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent {

  author?: Author;

  currentPage: number = 1;
  collections: Collection[] = [];

  constructor(
    private collectionService: CollectionService
  )
  {
    this.author = history.state.author;
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
    if (this.author == undefined) return;
    this.collectionService.getByAuthor(this.author.id,this.currentPage-1).subscribe({
      next: (response: Collection[]) => {
        this.collections = response;
      }
    });
  }

}
