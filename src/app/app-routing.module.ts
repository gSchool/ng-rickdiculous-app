import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

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
    path: 'episode/:id',
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
