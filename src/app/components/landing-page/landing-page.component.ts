import { Component } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Rickfans of Mortydom';
  episodes: Episode[] = [];

  handleSearch(event: string): void {
    console.log('Search event', event);
  }
}
