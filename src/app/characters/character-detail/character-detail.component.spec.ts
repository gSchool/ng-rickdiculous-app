import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterDetailComponent } from './character-detail.component';
import { CharactersService } from '../../services/characters.service';
import MockCharactersService from '../../services/mock-characters.service';
import { Character } from '../../models/character';
import { CharacterRoutingModule } from '../character-routing.module';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let router: Router;
  let location: Location;
  let character: Character;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      imports: [ RouterTestingModule, CharacterRoutingModule ],
      providers: [ { provide: CharactersService, useClass: MockCharactersService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    character = createCharacter();
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

  it('should route character details to character page', fakeAsync( () => {
    component.character = character;
    fixture.detectChanges();
    const alink = fixture.nativeElement.querySelector('a');
    alink.click();
    tick();
    expect(location.path()).toBe('/characters/123');
  }));
});

// Test helpers ================================================

function createCharacter(id: number = 123, name: string = 'Morty Test'): Character {
  const char = new Character();
  char.id = id;
  char.name = name;
  return char;
}
