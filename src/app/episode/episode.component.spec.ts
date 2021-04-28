import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Episode } from '../episode';
import { MockRMServiceService } from '../mock-rmservice.service';
import { RickAndMortyService } from '../rickandmorty.service';

import { EpisodeComponent } from './episode.component';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;
  let htmlElement: any;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeComponent ],
      providers: [{provide: RickAndMortyService, useClass: MockRMServiceService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    htmlElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card elements', () => {
    expect(htmlElement.querySelector('.card')).not.toBeNull();
    expect(htmlElement.querySelector('.card-title')).not.toBeNull();
    expect(htmlElement.querySelector('.card-subtitle')).not.toBeNull();
    expect(htmlElement.querySelector('.card-text')).not.toBeNull();
  });

});
