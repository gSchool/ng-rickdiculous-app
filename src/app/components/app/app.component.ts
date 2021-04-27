import { Component } from '@angular/core';
import {TestingService} from '../../testing.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rickfans of Mortydom';
  results = [];
  testServ: Observable<any>;

  constructor(testingService: TestingService){

    testingService.getAll().subscribe(data => console.log(data.results));

    console.log(testingService.results);
    // console.log(resultsData);
  }


}
