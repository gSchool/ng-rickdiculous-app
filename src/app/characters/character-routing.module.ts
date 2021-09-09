import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import {CharacterResolverService} from '../shared/character-resolver.service';
import {CharacterPageComponent} from './character-page/character-page.component';

const routes: Routes = [
  {
    path: 'characters/:id',
    component: CharacterPageComponent,
    resolve: {
      character: CharacterResolverService
    }
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CharacterRoutingModule { }
