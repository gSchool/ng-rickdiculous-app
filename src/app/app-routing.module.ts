import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpisodelistComponent } from './episodelist/episodelist.component';
import { EpdetailsComponent } from './epdetails/epdetails.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'episodelist', component: EpisodelistComponent },
  { path: 'episodelist/epdetails/:id', component: EpdetailsComponent },
  { path: 'home/epdetails', component: EpdetailsComponent },
  { path: 'searchform', component: SearchformComponent},
  { path: 'results', component: ResultsComponent}
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
