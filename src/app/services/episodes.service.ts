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
  private episodes: Episode[] = [];

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

}
