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
  @Input() public ourSearch: string;

  constructor(private rmService: RickAndMortyService,
              private searchSerivce: SearchServiceService) {

  }

  ngOnInit(): void {
    this.rmService.buildEpisodes();
    this.aList = this.rmService.episodes; //reference
    //this.bList = JSON.parse(JSON.stringify(this.aList)); //copy
    this.searchSerivce.searchSend$.subscribe(search => {
      this.aList = this.rmService.episodes.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));
      console.log('this got called');
    });
  }

}
