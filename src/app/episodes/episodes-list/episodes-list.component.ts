import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private service: EpisodesService) { }

  ngOnInit(): void {
    this.service.all().subscribe(episodes => this.episodes = episodes.results );
  }

}
