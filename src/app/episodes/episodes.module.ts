import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {CharactersModule} from '../characters/characters.module';

@NgModule({
  declarations: [
    EpisodesListComponent,
    EpisodeDetailComponent,
    EpisodePageComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    HttpClientModule,
    CharactersModule
  ],
  exports: [
    EpisodeDetailComponent,
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
