import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})


export class RicknmortyService {
  private url = 'https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41'
  episodeHolder : Observable<Episode>;
  episodesHolder : Observable<Episode[]>;
  constructor(private http: HttpClient) { }

  allepisodes(): Observable <Episode[]>{
    this.episodesHolder = this.http.get<Episode[]>(this.url)
    return this.episodesHolder;
  }

  singleepisode(id: string): Observable <Episode>{
    this.episodeHolder = this.http.get<Episode>('https://rickandmortyapi.com/api/episode/' + id)
    return this.episodeHolder

  }

  fetchEpisode(){
    return this.episodeHolder
  }





}
