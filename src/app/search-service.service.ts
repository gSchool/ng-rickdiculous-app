import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private searchSendData: Subject<string> = new Subject<string>();

  searchSend$ = this.searchSendData.asObservable();

  constructor() {
  }

  sendSearch(search: string) {
    this.searchSendData.next(search);
  }
}
