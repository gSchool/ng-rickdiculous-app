import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

interface Episode{
  info ?: {};
  results ?: [];
}

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
    return this.http.get(this.baseAPI + '/episode').pipe(
      tap(
        data => this.results = data.results,
        err => console.log(err)
      ));
  }

  getEpisode(episode: number): Observable<any> {
    return this.http.get(this.baseAPI + `/episode/${episode}`).pipe(
      tap(
        data => console.log(data),
        err => console.log(err)
      ));
  }
}

