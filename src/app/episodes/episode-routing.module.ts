import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';

const routes: Routes = [
  {
    path: 'episodes',
    component: EpisodesListComponent
  },
  {
    path: 'episodes/:id',
    component: EpisodePageComponent
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
