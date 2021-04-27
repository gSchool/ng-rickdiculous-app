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

  constructor(rmService: RickAndMortyService) {
    this.aList = rmService.episodes;
    console.log(this.aList);
  }

  ngOnInit(): void {
  }

}
