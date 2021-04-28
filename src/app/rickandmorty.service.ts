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
  private _episodes: Episode[] = [];
  private _lastEpisode: Episode;

  constructor(private http: HttpClient) {
    //this.buildEpisodes();
    return;
  }

  getEpisodesObservable(): Observable<any> {
    return this.http.get(this.baseAPI + '/episode');
  }

  getEpisodePageObservable(nextPage: string): Observable<any> {
    return this.http.get(nextPage);
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
            item.characters, item.url));
        });
        this.buildPage(data.info.next);
      },
      error => console.log(error)
    );
  }

  private buildPage(page : string): void{
    this.getEpisodePageObservable(page).subscribe(
      data => {
        data.results.forEach((item) => {
          this.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
            item.characters, item.url));
        });
        if(data.info.next)
          this.buildPage(data.info.next);
      },
      error => console.log(error)
    );
  }

  getEpisode(episode: number): Episode {
    return this._episodes.filter((element) => {element.id == episode})[0];
  }

  get episodes(): Episode[]{
    return this._episodes;
  }

  set episodes(episodes : Episode[]){
    this._episodes = episodes;
  }
}

