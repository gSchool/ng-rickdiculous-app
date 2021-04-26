import { TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodesService } from './episodes.service';
import { of } from 'rxjs';

const episodes = [{ name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}];


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

  it('should get list of all episodes', () => {
    httpClientSpy.get.and.returnValue(of(episodes));

    service.all().subscribe(data => {
      expect(data).toEqual(episodes);
    });
  });
});
