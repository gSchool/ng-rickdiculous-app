import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {RickAndMortyService} from '../../rickandmorty.service';
import {Observable} from 'rxjs';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rickfans of Mortydom';

  constructor(private searchService : SearchServiceService){
  }

  sendData(content: string){
    this.searchService.sendSearch(content);
  }

}
