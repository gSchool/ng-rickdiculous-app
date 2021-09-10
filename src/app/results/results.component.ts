import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { RicknmortyService } from '../allepisode.service';
import { RicknmortyCharacterService } from '../allcharacters.service';
import { Episode } from '../episode';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';


interface Response  {
  info: any
  results: Episode[]
}
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  public episodes: Response["results"];
  public episodeResults: Episode[] = [];

  public input : string;

  constructor(private episodeservice: RicknmortyService,private characterservice: RicknmortyCharacterService) { }

  ngOnInit(): void {

    this.episodeservice.allepisodes().subscribe(data => {
      
      this.episodes = data.results;
    });


    
    if(this.input){
    for(let episode of this.episodes){
      console.log("inside result loop",);
     if( episode.name.includes(this.input)){this.episodeResults.push(episode);}
    }
  }
  }

}
