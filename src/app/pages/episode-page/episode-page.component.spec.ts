import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodePageComponent } from './episode-page.component';
import { Episode } from '../../models/episode';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('EpisodePageComponent', () => {
  let component: EpisodePageComponent;
  let fixture: ComponentFixture<EpisodePageComponent>;
  let mockService;
  let mockActivatedroute;
  let html;
  let episode;

  beforeEach(waitForAsync(() => {
    episode = createEpisode();
    mockActivatedroute = { data: of(episode) };
    mockService = jasmine.createSpyObj(['getById']);
    mockService.getById.and.returnValue(of(episode));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ EpisodePageComponent ],
      providers: [
        { provide: EpisodesService, useValue: mockService },
        { provide: ActivatedRoute, useValue: mockActivatedroute }
      ]}).compileComponents();

    fixture = TestBed.createComponent(EpisodePageComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
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

  // Test utils ------------

  function createEpisode(name: string = 'Mortytest', id: number = 1): Episode {
    const e = new Episode();
    e.id = id;
    e.name = name;
    return e;
  }
});
