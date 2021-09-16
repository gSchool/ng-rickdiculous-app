import {Component, Input, OnInit} from '@angular/core';
import { Episode } from '../../models/episode';
import {EpisodesService, episodesUrl} from '../../services/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: Episode[] = [];
  @Input() episodeUrls!: string[];

  constructor(private service: EpisodesService) { }

  // TODO: This component should simply receive a list of episodes without request for all()
  ngOnInit(): void {
    if (this.episodeUrls) {
      this.service.getListByUrls(this.episodeUrls).subscribe(episodes => this.episodes = episodes );
    } else {
      this.service.all().subscribe(episodes => this.episodes = episodes.results );
    }
  }

}
