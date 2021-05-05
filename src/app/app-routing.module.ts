import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodePageComponent } from './episodes/episode-page/episode-page.component';
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesListComponent
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'episodes/:id',
    loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule),
    component: EpisodePageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
