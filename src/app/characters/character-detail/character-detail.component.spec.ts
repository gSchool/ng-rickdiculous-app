import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { CharactersService } from '../../services/characters.service';
import MockCharactersService from '../../services/mock-characters.service';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      providers: [ { provide: CharactersService, useClass: MockCharactersService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.character');
    expect(element.textContent).toContain(component.character.name);
  });
});
