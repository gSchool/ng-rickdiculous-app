import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../allepisode.service';
import { Episode } from '../episode';
@Component({
  selector: 'app-episodelist',
  templateUrl: './episodelist.component.html',
  styleUrls: ['./episodelist.component.css']
})
export class EpisodelistComponent implements OnInit {
public episodes: Episode[]
public epholder: Episode
  constructor(private episodeservice: RicknmortyService) { }

  ngOnInit(): void {

    this.episodeservice.allepisodes().subscribe(data => this.episodes = data);


  }


  storeEpisode(index: number): void{
    index++;
   this.episodeservice.singleepisode(index.toString()).subscribe(data => this.epholder = data);
  }

  fetchEpisode(): Episode {
    return this.epholder
  }

}


