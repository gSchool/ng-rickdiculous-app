import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiRicksponse } from './episodes.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchByName(category: string, query: string): Observable<ApiRicksponse> {
    return this.http.get<ApiRicksponse>(`${env.apiUrl}${category}/?name=${query}`);
  }
}
