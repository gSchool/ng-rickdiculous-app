import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private searchSendData: Subject<string> = new Subject<string>();

  searchSend$: Observable<string> = this.searchSendData.asObservable();

  constructor() {
  }

  sendSearch(search: string) {
    this.searchSendData.next(search);
  }
}
