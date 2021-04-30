import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { of } from 'rxjs';
import { ApiRicksponse } from './episodes.service';

const apiResponse: ApiRicksponse = {info: {}, results: [{name: 'Ricksty', episode: 'TEST02', id: 123, air_date: 'May 1, 2014', characters: []}]};

describe('SearchService', () => {
  let service: SearchService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SearchService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search by category (HTTP)', () => {
    httpClientSpy.get.and.returnValue(of(apiResponse));

    service.searchByName('episode', 'rick').subscribe(data => {
      expect(data.results).toEqual(apiResponse.results);
    });
  });
});
