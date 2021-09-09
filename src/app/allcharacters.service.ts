import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Episode } from './episode';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Character } from './character';

interface CharacterResponse {
  info: any;
  results: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class RicknmortyCharacterService {
  private url = 'https://rickandmortyapi.com/api/character';

  characterHolder: Observable<Character>;
  charactersHolder: Observable<CharacterResponse>;
  charimgHolder: Observable<string>;
  constructor(private http: HttpClient) {}

  allcharacters(): Observable<CharacterResponse> {
    this.charactersHolder = this.http.get<CharacterResponse>(this.url);
    return this.charactersHolder;
  }

  singlecharacter(id: string): Observable<Character> {
    this.characterHolder = this.http.get<Character>(
      'https://rickandmortyapi.com/api/character/' + id
    );
    return this.characterHolder;
  }







}
