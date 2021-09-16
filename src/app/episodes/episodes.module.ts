import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EpisodesListComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    HttpClientModule
  ],
  exports: [
    EpisodeDetailComponent,
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
