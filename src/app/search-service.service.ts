import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private searchSendData: Subject<string> = new Subject<string>();
  private searchReceiveData: Subject<string> = new Subject<string>();

  searchSend$ = this.searchSendData.asObservable();
  searchReceive$ = this.searchReceiveData.asObservable();

  constructor() {
  }

  sendSearch(search: string) {
    this.searchSendData.next(search);
  }

  receiveSearch(search: string) {
    this.searchReceiveData.next(search);
  }
}
