import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RicknmortyService } from '../allepisode.service';
import { Episode } from '../episode';
import { EpisodelistComponent } from '../episodelist/episodelist.component';
@Component({
  selector: 'app-epdetails',
  templateUrl: './epdetails.component.html',
  styleUrls: ['./epdetails.component.css']
})
export class EpdetailsComponent implements OnInit {
  id :number
  name: string
  air_date: string
  episode: string
  characters: Array<String>
  url: string
  created: string

  constructor(private episodeservice: RicknmortyService,) {

  }

  ngOnInit(): void {

      this.episodeservice.fetchEpisode().subscribe(data => this.id = data.id)
      this.episodeservice.fetchEpisode().subscribe(data => this.name = data.name)
      this.episodeservice.fetchEpisode().subscribe(data => this.air_date = data.air_date)
      this.episodeservice.fetchEpisode().subscribe(data => this.episode = data.episode)
      this.episodeservice.fetchEpisode().subscribe(data => this.characters = data.characters)
      this.episodeservice.fetchEpisode().subscribe(data => this.url = data.url)
      this.episodeservice.fetchEpisode().subscribe(data => this.created = data.created)
  }

}
