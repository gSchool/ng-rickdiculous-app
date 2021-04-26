import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface ApiRicksponse {
  info?: {};
  results: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url = 'https://rickandmortyapi.com/api/episode/';
  // tslint:disable-next-line:variable-name
  private _episodes: Episode[] = [];

  constructor(private http: HttpClient) { }

  all(): Observable<any>{
    return this.http.get<ApiRicksponse>(this.url)
      .pipe(
        tap(
          data => this.episodes = data.results,
          err => console.error('Episode.all()', err)
        )
      );
  }

  getById(episodeId: number): Observable<any> {
    return this.http.get<ApiRicksponse>(this.url + episodeId);
  }

  findByName(episodeName: string): Episode {
    return this._episodes.filter(episode => episode.name === episodeName)[0];
  }

  get episodes(): Episode[] {
    return this._episodes;
  }

  set episodes(episodes: Episode[]) {
    this._episodes = episodes;
  }
}
