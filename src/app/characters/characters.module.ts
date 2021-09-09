import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';
import { CharacterPageComponent } from './character-page/character-page.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterPageComponent
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
