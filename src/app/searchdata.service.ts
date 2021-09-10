import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

  public input: string = '';

  getsearch(){
    return this.input
  }
  constructor() { }
}
