import {Component, Input, OnInit} from '@angular/core';
import {RickAndMortyService} from '../rickandmorty.service';
import {Episode} from '../episode';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  @Input() public aList: Episode[];
  @Input() public favList: Episode[];
  @Input() public ourSearch: string;
  @Input() public favoritesToggled: boolean = false;

  constructor(private rmService: RickAndMortyService,
              private searchSerivce: SearchServiceService) {
  }

  ngOnInit(): void {
    this.rmService.buildEpisodes();
    this.aList = this.rmService.episodes; //reference
    if(this.favoritesToggled)
    {
      // console.log(this.rmService.episodes); 
      // this.rmService.episodes.forEach((episode) => {
      //   console.log(episode.id);
      // });
      this.aList = this.rmService.episodes.filter((value) => localStorage.getItem('' + value.id) === 'true');
    }
      
    else{
      
      this.searchSerivce.searchSend$.subscribe(search => {
        this.aList = this.rmService.episodes.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));
        console.log('this got called');
      });
    }   
  }
}
