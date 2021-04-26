import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    SearchFormComponent,
    EpisodesListComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
