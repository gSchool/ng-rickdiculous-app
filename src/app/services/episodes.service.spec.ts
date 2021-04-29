import { TestBed, waitForAsync } from '@angular/core/testing';

import {EpisodesService, episodesUrl} from './episodes.service';
import { of } from 'rxjs';
import { Episode } from '../models/episode';
import episodesJson from '../data/ram_episodes.json';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

const apiResponse: {} = {info: {}, results: [{name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};

describe('EpisodesService', () => {
  let service: EpisodesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EpisodesService(httpClientSpy as any);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of all episodes (HTTP)', () => {
    httpClientSpy.get.and.returnValue(of(apiResponse));

    service.all().subscribe(data => {
      expect(data.results).toEqual(service.episodes);
    });
  });

  it('should get an episode by id (HTTP)', () => {
    const episode: Episode = episodesJson.results[0];
    httpClientSpy.get.and.returnValue(of(episode));

    service.getById(episode.id).subscribe(data => {
      expect(data).toEqual(episode);
    });
  });

  it('should search for episodes by name', () => {
    const episode: Episode = episodesJson.results[1];
    service.episodes = episodesJson.results;
    expect(service.findByName('Lawnmower Dog')).toEqual(episode);
  });

  it('should send request for episode by name (HTTP)', () => {
    const episode: Episode = episodesJson.results[1];
    httpClientSpy.get.and.returnValue(of(episode));

    service.getByName(episode.name).subscribe(data => {
      expect(data).toEqual(episode);
    });
  });

  xit('should return next page of search results', () => {
    // TODO: Caching old results may not be the most straight-forward implementation with page
  });
});


describe('EpisodesService (alt)', () => {
  let service: EpisodesService;
  let httpTestController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EpisodesService ]
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EpisodesService);
  }));

  it('all() should send one request to api', () => {
    service.all().subscribe(); // start request

    const request = httpTestController.expectOne(episodesUrl);
    request.flush({info: {}, results: []}); // data to return for request
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
