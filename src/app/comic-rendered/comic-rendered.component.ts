import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../model/Comic';

@Component({
  selector: 'app-comic-rendered',
  templateUrl: './comic-rendered.component.html',
  styleUrls: ['./comic-rendered.component.css']
})
export class ComicRenderedComponent implements OnInit {

  @Input()
  comic!: Comic;

  showDescription: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

}
