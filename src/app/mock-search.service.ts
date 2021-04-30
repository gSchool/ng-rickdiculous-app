import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockSearchService {

  searchSend$: Observable<string> = of('z');

  constructor() { }
}
