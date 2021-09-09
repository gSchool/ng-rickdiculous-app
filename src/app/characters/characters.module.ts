import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ]
})
export class CharactersModule { }
