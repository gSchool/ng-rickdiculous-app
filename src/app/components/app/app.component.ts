import { Component } from '@angular/core';
import {RickAndMortyService} from '../../rickandmorty.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rickfans of Mortydom';
// testingService.getAll().subscribe(data => console.log(data.results));

}
