import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

const routes: Routes = [
  {
    path: 'episode',
    component: EpisodeDetailComponent
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
