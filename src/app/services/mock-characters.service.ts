import { Observable, of } from 'rxjs';
import { Character } from '../models/character';

export interface ApiMortysponse {
  info: {};
  results: Character[];
}

const character = new Character();
character.id = 1;

export default class MockCharactersService {
  results: ApiMortysponse = { info: {}, results: [{ id: 1, name: 'Mortysponse 1', status: 'alive', species: 'human', type: '', gender: 'woman', episode: [], image: '', url: '', created: '', location: {}, origin: {}} ]};
  characters: any[] = this.results.results;

  all(): Observable<ApiMortysponse> {
    return of(this.results);
  }

  // getById(id: number): Character {
  //   return character;
  // }
}
