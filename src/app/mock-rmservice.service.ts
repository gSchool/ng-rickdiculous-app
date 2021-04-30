import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class MockRMServiceService {

  _episodes: Episode[] = [
      {id: 0, name: "testEp", airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []},
      {id: 1, name: 'zEp', airDate: 'whatever2', episode: 's01E02', url: 'invalidurl', characters: []}
  ];

  character = [{name : 'Rick', image:'../assets/placeholder.jpg'}]

  _lastEpisode: Episode = this._episodes[0];

  constructor() { }

  buildEpisodes(){
    // return of(expectedReponse);
  }

  buildEpisode(){
    // normally would define _lastepisode
  }

  getEpisode(){
    return this._episodes[0];
  }

  getEpisodeObservable(): Observable<any>{
    return of(this._episodes[0]);
  }

  getCharacterObservable(): Observable<any>{
    return of(this.character);
  }

  get episodes(){
    return this._episodes;
  }

  get lastEpisode(){
    return this._lastEpisode;
  }
}
