import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  exports: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CharacterRoutingModule
  ]
})
export class CharactersModule { }
