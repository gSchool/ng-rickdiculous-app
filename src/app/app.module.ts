import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { SearchServiceService } from './search-service.service';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeComponent,
    EpisodeDetailComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
