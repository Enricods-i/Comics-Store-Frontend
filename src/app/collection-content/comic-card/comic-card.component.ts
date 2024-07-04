import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/model/Comic';

@Component({
  selector: 'comic-card',
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.css'
})
export class ComicCardComponent {

  @Input() comic: Comic | undefined;

  expansionPanelOpened: boolean = false;

}
