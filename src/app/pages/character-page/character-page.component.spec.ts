import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CharacterPageComponent } from './character-page.component';
import {Character} from '../../models/character';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {EpisodesListComponent} from '../../episodes/episodes-list/episodes-list.component';

describe('CharacterPageComponent', () => {
  let component: CharacterPageComponent;
  let fixture: ComponentFixture<CharacterPageComponent>;
  let character: Character;
  let mockActivatedRoute;

  beforeEach(waitForAsync(() => {
    mockActivatedRoute = { data: of(character) };

    TestBed.configureTestingModule({
      declarations: [ CharacterPageComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }); // TODO: Learn. apparently .compileComponents() no longer necessary?

    fixture = TestBed.createComponent(CharacterPageComponent);
    component = fixture.componentInstance;
    character = createCharacter();
    component.character = character;
  }));

  // Fixes the weird and vague afterEach error reported when all tests pass.
  // https://stackoverflow.com/questions/51543241/angular-6-unit-tests-an-error-was-thrown-in-afterall-nreferenceerror-cant-fin
  afterEach(() => {
    fixture.destroy();
  });

  it('should render a character', () => {
    component.character = character;
    fixture.detectChanges();
    const characterEl = fixture.nativeElement.querySelector('.character h2');
    expect(characterEl).not.toBeNull();
    expect(characterEl.textContent).toContain(character.name);
  });

  it('should render episodes list for the character', () => {
    const episodesEl = fixture.debugElement.queryAll(By.directive(EpisodesListComponent));
    expect(episodesEl.length).toEqual(1);
  });
});

function createCharacter(): Character {
  const char = new Character();
  char.id = 1;
  char.name = 'Rick Tester';
  return char;
}
