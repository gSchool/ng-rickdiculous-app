import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() public url: string;
  @Input() public character: Character;

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    if (this.url) {
      this.service.getByUrl(this.url).subscribe(character => this.character = character);
    }
  }

}
