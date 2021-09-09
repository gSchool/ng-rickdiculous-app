import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';
import {Character} from '../../models/character';
import {CharacterDetailComponent} from '../character-detail/character-detail.component';
import {CharactersService} from '../../services/characters.service';
import MockCharactersService from '../../services/mock-characters.service';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent, CharacterDetailComponent ],
      providers: [ { provide: CharactersService, useClass: MockCharactersService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of characters', () => {
    component.characters.push(new Character());
    fixture.detectChanges();
    const characterEl = fixture.debugElement.queryAll(By.directive(CharacterDetailComponent));
    expect(characterEl.length).toEqual(2);
  });

  it('should fetch characters from service', () => {
    expect(component.characters.length).toEqual(1);
  });

  it('should render loading bar if no characters to render', () => {
    component.characters = [];
    fixture.detectChanges();
    const loadingEl = fixture.nativeElement.querySelector('progress');
    expect(loadingEl).not.toBeNull();
  });
});
