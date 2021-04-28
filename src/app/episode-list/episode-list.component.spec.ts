import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import {RickAndMortyService} from '../rickandmorty.service';
import { HttpClientModule } from '@angular/common/http';
import {Episode} from '../episode';
import {of} from 'rxjs';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let rmService: RickAndMortyService;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let htmlElement: any;
  let httpClientSpy: {get: jasmine.Spy};

  const expectedResponse: {} = {
    info: {},
    results: [
      {id: 0, name: 'testEp', airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
    ]
  };

  beforeEach(async () => {
    //const fakeRickMortyService = jasmine.createSpyObj('RickAndMortyService', [''])
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ EpisodeListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    rmService = new RickAndMortyService(httpClientSpy as any);
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    httpClientSpy.get.and.returnValue(of(expectedResponse));
    htmlElement = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject rick and morty service into list component', () => {
    expect(rmService).toBeTruthy();
  });

  it('should obtain a list of movies from the service', () => {
    rmService.buildEpisodes();
    const epList: Episode[] = rmService.episodes;
    expect(epList.length).toBeGreaterThan(0);
    //expect().toBeResolvedTo();
  });

  it('should render a collection of episode elements', () => {
    //component.aList = [{name : "1", id: 1, episode: "1"}];
    // rmService.buildEpisodes();
    // fixture.detectChanges();
    expect(htmlElement.querySelectorAll('app-episode').length).toBeGreaterThan(0);
  });
});
