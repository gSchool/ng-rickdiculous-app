import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { EpisodeDetailComponent } from '../episode-detail/episode-detail.component';
import { AppComponent } from '../components/app/app.component';
import { EpisodeListComponent } from '../episode-list/episode-list.component';
import { FavoritesComponent } from '../favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
