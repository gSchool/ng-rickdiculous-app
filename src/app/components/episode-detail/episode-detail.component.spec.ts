import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { EpisodeDetailComponent } from './episode-detail.component';
import { Episode } from '../../models/episode';

describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;
  let episode: Episode;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    episode = createEpisode();
    component.episode = episode;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an episode', () => {
    expect(component.episode).toBeTruthy();
    expect(html.querySelector('h3').textContent).toEqual(episode.name);
  });

  // Test utils ------------------------

  function createEpisode(): Episode {
    episode = new Episode();
    episode.name = 'Test and Rorty';
    episode.episode = 'TEST01';
    episode.airDate = new Date('December 2, 2013');
    return episode;
  }
});
