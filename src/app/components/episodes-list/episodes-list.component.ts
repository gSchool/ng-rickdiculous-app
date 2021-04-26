import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: Episode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
