import {fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RickAndMortyService } from './rickandmorty.service';
import {Episode} from './episode';
import {of} from 'rxjs';
//import * as http from 'http';



describe('RickAndMortyService', () => {
  let service: RickAndMortyService;
  let httpClientSpy: {get: jasmine.Spy};

  const expectedResponse: {info: {}, results: [{}]} = {
    info: {next : null},
    results: [
      {id: 0, name: 'testEp', air_date: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
    ]
  };
  const testEpisode: Episode = new Episode(0, 'testEp', 'whatever',  'S01E01',  'testurl', []);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RickAndMortyService(httpClientSpy as any);
    httpClientSpy.get.and.returnValue(of(expectedResponse));
    service.buildEpisodes();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Episode Objects', () => {
    service.getEpisodesObservable().subscribe(
      data => {
        expect(data).toEqual(expectedResponse);
      },
      error => console.log(error)
    );
  });

  it('should get a single specific Episode Object from the episode list', () => {
    let episodeResponse: Episode = service.getEpisode(0);
    expect(episodeResponse).toEqual(testEpisode);
  });

  it('should query for a specific Episode from the API', () => {
    httpClientSpy.get.and.returnValue(of(expectedResponse.results[0]));
    service.getEpisodeObservable('0').subscribe(
      data => {
        expect(data).toEqual(expectedResponse.results[0]);
      }
    )
  });
});
