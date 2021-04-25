import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    SearchFormComponent,
    EpisodesListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
