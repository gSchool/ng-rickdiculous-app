import {Component, Input, OnInit} from '@angular/core';
import {RickAndMortyService} from '../rickandmorty.service';
import {Episode} from '../episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  @Input() public aList: Episode[];

  constructor(private rmService: RickAndMortyService) {
    //rmService.buildEpisodes();
    this.aList = rmService.episodes;
  }

  ngOnInit(): void {
  }

}
