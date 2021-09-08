import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodesListComponent } from './episodes-list.component';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodeDetailComponent } from '../episode-detail/episode-detail.component';
import MockEpisodesService from '../../services/mock-episodes.service';
import { By } from '@angular/platform-browser';

describe('EpisodesListComponent', () => {
  let component: EpisodesListComponent;
  let fixture: ComponentFixture<EpisodesListComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesListComponent, EpisodeDetailComponent ],
      providers: [ { provide: EpisodesService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of episodes', () => {
    expect(component.episodes).toBeDefined();
  });

  it('should render episodes', () => {
    const episodeElements = fixture.debugElement.queryAll(By.directive(EpisodeDetailComponent));
    expect(episodeElements.length).toEqual(1);
  });

  it('should fetch episodes from service', () => {
    expect(component.episodes.length).toEqual(1);
  });

  it('should render episodes in a flexible row', () => {
    expect(html.querySelector('.row')).toBeTruthy();
  });
});
