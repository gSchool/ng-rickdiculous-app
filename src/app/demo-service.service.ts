import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  results: [] = [];
  endpoint = 'https://rickandmortyapi.com/api/episode/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.endpoint)
      .pipe(
        tap(
          data => this.results = data.data,
          err => console.log(err)
        )
      );
  }
}
