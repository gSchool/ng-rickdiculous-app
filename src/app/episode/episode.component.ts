import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: Episode = new Episode(0, 'name', 'date', '');
  @Input() favoriteToggle = false;

  constructor() { }

  toggleFavorite(){
    this.favoriteToggle = !this.favoriteToggle;
    localStorage.setItem(''+this.episode.id, this.favoriteToggle.toString());
  }

  ngOnInit(): void {
    this.favoriteToggle = localStorage.getItem(''+this.episode.id) == 'true' || false;
  }

}
