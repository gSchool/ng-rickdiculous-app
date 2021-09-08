import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Episode } from './episode';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Response {
  info: any;
  results: Episode[];
}

@Injectable({
  providedIn: 'root',
})
export class RicknmortyService {
  private url = 'https://rickandmortyapi.com/api/episode';
  episodeHolder: Observable<Episode>;
  episodesHolder: Observable<Response>;
  info: {};
  results: [];
  constructor(private http: HttpClient) {}

  allepisodes(): Observable<Response> {
    this.episodesHolder = this.http.get<Response>(this.url);
    return this.episodesHolder;
    // .pipe(
    //   tap(
    //     data => {
    //       this.episodesHolder.results = data.results;
    //       this.info = data.info;
    //     }

    //   )
    // )
  }

  singleepisode(id: string): Observable<Episode> {
    this.episodeHolder = this.http.get<Episode>(
      'https://rickandmortyapi.com/api/episode/' + id
    );
    return this.episodeHolder;
  }

  fetchEpisode() {
    return this.episodeHolder;
  }
}
