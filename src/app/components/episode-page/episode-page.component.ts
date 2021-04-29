import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent implements OnInit {
  public episode: Episode;
  public episodeId: number;

  constructor(private route: ActivatedRoute,
              private service: EpisodesService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.episodeId = +this.route.snapshot.paramMap.get('id');
    this.getEpisode();
  }

  getEpisode(): void {
    this.service.getById(this.episodeId).subscribe(episode => this.episode = episode );
  }

}
