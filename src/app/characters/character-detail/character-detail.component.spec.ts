import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { CharactersService } from '../../services/characters.service';
import MockCharactersService from '../../services/mock-characters.service';
import { Character } from '../../models/character';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      providers: [ { provide: CharactersService, useClass: MockCharactersService }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character', () => {
    component.character = new Character();
    component.character.name = 'Jerry';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.character');
    expect(element.textContent).toContain(component.character.name);
  });

  it('should render loading bar if no character', () => {
    component.character = null;
    fixture.detectChanges();
    const loadingEl = fixture.nativeElement.querySelector('progress');
    expect(loadingEl).not.toBeNull();
  });
});
