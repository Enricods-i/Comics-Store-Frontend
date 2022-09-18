import { Component } from '@angular/core';
import { ComicService } from '../comic.service';
import { Collection } from '../model/Collection';
import { Comic } from '../model/Comic';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent {

  collection?: Collection;
  comics: Comic[] = [];

  currentPage: number = 1;

  constructor(private comicService: ComicService) {
    this.collection = history.state.collection;
    this.getComics();
  }

  getComics(){
    if (this.collection == undefined) return;
    this.comicService.getByCollection(this.collection.id, this.currentPage-1).subscribe({
      next: (response: Comic[]) => {
        this.comics = response;
      }
    });
  }

  previousPage(){
    this.currentPage--;
    this.getComics();
  }

  nextPage() {
    this.currentPage++;
    this.getComics();
  }

  increase(s: string): string{
    return String(parseInt(s)+1);
  }

  decrease(s: string): string{
    return String(parseInt(s)-1);
  }

}
