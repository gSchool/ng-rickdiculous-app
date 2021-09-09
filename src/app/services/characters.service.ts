import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMortysponse } from './mock-characters.service';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

export const charactersUrl = env.apiUrl + '/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiMortysponse> {
    return this.http.get<ApiMortysponse>(charactersUrl);
  }

  getByUrl(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
