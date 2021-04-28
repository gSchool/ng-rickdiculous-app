import { Injectable } from '@angular/core';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class MockRMServiceService {

  _episodes: Episode[] = [
      {id: 0, name: "testEp", airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
  ];

  constructor() { }

  buildEpisodes(){
    // return of(expectedReponse);
  }

  getEpisode(){
    return this._episodes[0];
  }

  get episodes(){
    return this._episodes;
  }
}
