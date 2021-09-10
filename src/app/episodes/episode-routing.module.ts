import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EpisodeResolverService } from '../shared/episode-resolver.service';

const routes: Routes = [
  {
    path: 'episodes/:id',
    component: EpisodePageComponent,
    resolve: {
      episode: EpisodeResolverService
    }
  },
  {
    path: '',
    component: EpisodesListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class EpisodeRoutingModule { }
