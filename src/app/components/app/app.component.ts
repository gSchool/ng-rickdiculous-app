import {Component, OnInit} from '@angular/core';
import {EpisodesService} from '../../episodes.service';
import {Episode} from '../../episode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rickdiculous of Mortydom';
  episode: Episode;

  constructor(private episodeService: EpisodesService) {}

  ngOnInit(): void {
    this.episodeService.getEpisode().subscribe( episode => this.episode = episode);
  }
}
