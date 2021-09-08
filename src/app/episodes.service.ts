import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Episode } from './episode';

interface EpisodeResponse {
  air_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  episode: Episode;

  constructor(private http: HttpClient) { }

  getEpisode(): Observable<Episode> {
    return this.http.get<EpisodeResponse>('https://rickandmortyapi.com/api/episode/28')
      .pipe(
        map(episode => ({
          airDate: episode.air_date
        })),
        tap(
          episode => {
            this.episode = episode;
          }
        )
      );
  }
}
