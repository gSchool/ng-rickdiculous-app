import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { EpisodesModule } from './episodes/episodes.module';
import { CharactersModule } from './characters/characters.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    SearchFormComponent,
    SideMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    EpisodesModule,
    CharactersModule
  ],
  providers: [],
  bootstrap: [ LandingPageComponent ]
})
export class AppModule { }
