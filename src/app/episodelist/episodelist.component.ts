import { Component, OnInit } from '@angular/core';
import { RicknmortyService } from '../allepisode.service';
import { Episode } from '../episode';


interface Response  {
  info: any
  results: Episode[]
}

@Component({
  selector: 'app-episodelist',
  templateUrl: './episodelist.component.html',
  styleUrls: ['./episodelist.component.css'],
})
export class EpisodelistComponent implements OnInit {
  public episodes: Response["results"]
  public epholder: Response["results"]
  component: { id: number; name: string; air_date: string; episode: string; characters: string[]; url: string; created: string; };
  constructor(private episodeservice: RicknmortyService) {}

  ngOnInit(): void {
    console.log('Before subscribe')
    this.episodeservice.allepisodes().subscribe(data => {
      console.log('Suscribing...')
      this.episodes = data.results;
    }
      );
  }





  // // storeEpisode(index: number): void {
  // //   index++;
  // //   this.episodeservice.singleepisode(index.toString()).subscribe(data =>{
  // //     console.log('Stored Episode', data)
  // //     this.epholder = data.results


  //   });
  // }

  fetchEpisode(): Response["results"]{
    return this.epholder;
  }
}
