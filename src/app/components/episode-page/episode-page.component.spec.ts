import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodePageComponent } from './episode-page.component';
import { Episode } from '../../models/episode';
import { ActivatedRoute} from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EpisodePageComponent', () => {
  let component: EpisodePageComponent;
  let fixture: ComponentFixture<EpisodePageComponent>;
  let mockService;
  let mockActivatedroute;
  let html;
  let episode;

  beforeEach(waitForAsync(() => {
    episode = createEpisode();
    mockService = jasmine.createSpyObj(['getById']);
    mockActivatedroute = { snapshot: { paramMap: { get: () => 1 }}};

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ EpisodePageComponent ],
      providers: [
        { provider: EpisodesService, useValue: mockService },
        { provider: ActivatedRoute, useValue: mockActivatedroute }
      ]}).compileComponents();

    fixture = TestBed.createComponent(EpisodePageComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    mockService.getById.and.returnValue(episode);
    fixture.autoDetectChanges();
  }));

  it('should render episode', () => {
    component.episode = episode;
    fixture.detectChanges();
    expect(html.querySelector('h2').textContent).toEqual(episode.name);
  });

  it('should render loading bar if no episode', () => {
    expect(html.querySelector('progress')).toBeTruthy();
  });

  xit('should get episode by id', () => {
    // FIXME: a problem with activated route not being captured on init? episode never there.
    fixture = TestBed.createComponent(EpisodePageComponent);
    component = fixture.componentInstance;
    component.getEpisode();
    fixture.detectChanges();
    expect(component.episode).toEqual(episode);
  });

  // Test utils ------------

  function createEpisode(name: string = 'Mortytest', id: number = 1): Episode {
    const e = new Episode();
    e.id = id;
    e.name = name;
    return e;
  }
});
