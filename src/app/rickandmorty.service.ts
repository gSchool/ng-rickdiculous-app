import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Episode} from './episode';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  baseAPI = 'https://rickandmortyapi.com/api';
  results: [] = [];

  constructor(private http: HttpClient) {
    return;
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseAPI + '/episode');
  }

  getEpisode(episode: number): Observable<any> {
    return this.http.get(this.baseAPI + `/episode/${episode}`).pipe(
      tap(
        data => console.log(data),
        err => console.log(err)
      ));
  }

  getAllEpisodes(): void {
    this.getAll().subscribe(
      data => {
        data.results.forEach((item) => {
          this.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
            item.characters, item.url));
        });
      },
      error => console.log(error)
    );
  }

  get episodes(): Episode[]{
    return this._episodes;
  }
}

