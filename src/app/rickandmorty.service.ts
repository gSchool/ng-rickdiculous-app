import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {Episode} from './episode';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  baseAPI = 'https://rickandmortyapi.com/api';
  results: [] = [];
  private _episodes: Episode[] = [];
  private _lastEpisode: Episode;

  constructor(private http: HttpClient) {
    return;
  }

  getEpisodesObservable(): Observable<any> {
    return this.http.get(this.baseAPI + '/episode');
  }

  getEpisodePageObservable(nextPage: string): Observable<any> {
    return this.http.get(nextPage);
  }

  getEpisodeObservable(id: string): Observable<any> {
    return this.http.get(this.baseAPI + '/episode/' + id);
  }

  getCharacterObservable(charArray: string[]): Observable<any> {
    let urlEnd: string[] = charArray.map(string => string.slice(string.lastIndexOf('/') + 1));
    let url: string = this.baseAPI + '/character/' + urlEnd.join(",");
    return this.http.get(url);
  }
  // get(episode: number): Observable<any> {
  //   return this.http.get(this.baseAPI + `/episode/${episode}`);
  // }

  buildEpisodes(): void {  
    this._episodes = [];
    this.getEpisodesObservable().subscribe(
      data => {
        data.results.forEach((item) => {
          this.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
            item.url, item.characters));
        });
        if(data.info.next)
          this.buildPage(data.info.next);
      },
      error => console.log(error)
    );
  }

  // buildEpisode(id: string): void {
  //   this.getEpisodeObservable(id).subscribe(
  //     data => {
  //       this._lastEpisode = new Episode(data.id, data.name, data.air_date, data.episode, data.url, data.characters);
  //     },
  //     error => console.log(error));
  //  }

  private buildPage(page : string): void{
    this.getEpisodePageObservable(page).subscribe(
      data => {
        data.results.forEach((item) => {
          this.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
            item.url, item.characters));
        });
        if(data.info.next)
          this.buildPage(data.info.next);
      },
      error => console.log(error)
    );
  }

  getEpisode(id: number): Episode {
    return this._episodes.filter((value) => value.id == id)[0];
  }

  get episodes(): Episode[]{
    return this._episodes;
  }

  set episodes(episodes : Episode[]){
    this._episodes = episodes;
  }

  get lastEpisode(): Episode{
    return this._lastEpisode;
  }
}

