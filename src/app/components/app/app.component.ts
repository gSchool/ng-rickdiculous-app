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
// testingService.getAll().subscribe(data => console.log(data.results));

  @Input() searchInput : string = 'Search';
  @Output() searchInputChange = new EventEmitter<string>();

  constructor(private searchService : SearchServiceService){
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes.searchInput.currentValue);
    console.log(changes.searchInput.currentValue)
    console.log("change");
    this.searchInputChange.emit(changes.searchInput.currentValue);
  }

  sendData(content: string){
    console.log(content);
    this.searchService.sendSearch(content);

  }

}
