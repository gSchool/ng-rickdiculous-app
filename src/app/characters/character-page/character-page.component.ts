import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character';
import { Episode } from '../../models/episode';
import {EpisodesService} from '../../services/episodes.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  public character: Character;
  public episodes: Episode[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { character: Character }) => {
      this.character = data.character;
    });
  }
}
