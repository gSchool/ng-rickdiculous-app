import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: Episode = new Episode(0, 'name', 'date', '');

  constructor() { }

  ngOnInit(): void {
  }

}
