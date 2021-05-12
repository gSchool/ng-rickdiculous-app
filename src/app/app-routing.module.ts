import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'episodes',
    loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule),
    component: EpisodesListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
      ),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
