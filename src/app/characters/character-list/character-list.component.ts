import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.all().subscribe(chars => this.characters = chars.results);
  }

}
