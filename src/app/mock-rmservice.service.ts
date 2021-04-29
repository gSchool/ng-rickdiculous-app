import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class MockRMServiceService {

  _episodes: Episode[] = [
      {id: 0, name: "testEp", airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
  ];

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

  get episodes(){
    return this._episodes;
  }

  get lastEpisode(){
    return this._lastEpisode;
  }
}
