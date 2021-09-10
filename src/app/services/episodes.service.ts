import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import EpicFailError from '../shared/epic-fail.error';

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
  public episodes: Episode[] = [];
  public info: {};

  constructor(private http: HttpClient) { }

  all(): Observable<ApiRicksponse>{
    return this.http.get<ApiRicksponse>(this.url)
      .pipe(
        tap(
          data => {
            this.episodes = data.results;
            this.info = data.info;
          }
        )
      );
  }

  getById(episodeId: number): Observable<Episode> {
    return this.http.get<Episode>(this.url + episodeId)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw new EpicFailError(err);
        })
      );
  }

  getByUrl(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }

  getEpisodes(episodeUrls: string[]): Episode[] {
    // return episodeUrls.map(url => (
    //   this.getByUrl(url).subscribe();
    // ));
    return;
  }

  getByName(episodeName: string): Observable<ApiRicksponse> {
    return this.http.get<ApiRicksponse>(`${this.url}?name=${episodeName}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw new EpicFailError(err);
        })
      );
  }

  findByName(episodeName: string): Episode {
    return this.episodes.filter(episode => episode.name === episodeName)[0];
  }

}
