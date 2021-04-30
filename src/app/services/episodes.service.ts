import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';

export interface ApiRicksponse {
  info?: {};
  results: Episode[];
}

export const episodesUrl = env.apiUrl + 'episode/';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url = episodesUrl;
  // tslint:disable-next-line:variable-name
  private _episodes: Episode[] = [];
  public info: {};

  constructor(private http: HttpClient) { }

  all(): Observable<ApiRicksponse>{
    return this.http.get<ApiRicksponse>(this.url)
      .pipe(
        tap(
          data => {
            this.episodes = data.results;
            this.info = data.info;
          },
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

  getByName(episodeName: string): Observable<any> {
    return this.http.get<ApiRicksponse>(`${this.url}/?=${episodeName}`);
  }

  get episodes(): Episode[] {
    return this._episodes;
  }

  set episodes(episodes: Episode[]) {
    this._episodes = episodes;
  }
}
