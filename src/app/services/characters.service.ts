import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiMortysponse } from './mock-characters.service';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export const charactersUrl = env + '/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  all(): Observable<ApiMortysponse> {
    return this.http.get<ApiMortysponse>(charactersUrl);
  }
}
