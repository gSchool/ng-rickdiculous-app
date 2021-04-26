import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Rickfans of Mortydom';

  handleSearch(event: string): void {
    console.log('Search event', event);
  }
}
