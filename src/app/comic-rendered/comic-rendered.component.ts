import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../model/Author';
import { Comic } from '../model/Comic';

@Component({
  selector: 'app-comic-rendered',
  templateUrl: './comic-rendered.component.html',
  styleUrls: ['./comic-rendered.component.css']
})
export class ComicRenderedComponent {

  @Input() comic!: Comic;

  showDescription: boolean = false;

  constructor(private router: Router) {}

  showAuthor(a: Author) {
    this.router.navigateByUrl('catalog/author', { state: {author: a}});
  }

}
