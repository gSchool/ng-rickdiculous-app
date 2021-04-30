import { Component } from '@angular/core';
import { ApiRicksponse } from '../../services/episodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Rickdiculous Mortydom';
  results: ApiRicksponse;

  handleSearch(event: ApiRicksponse): void {
    this.results = event;
    console.log('Search event', event);
  }
}
