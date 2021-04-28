import {fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RickAndMortyService } from './rickandmorty.service';
import {Episode} from './episode';
import {of} from 'rxjs';
//import * as http from 'http';



describe('TestingService', () => {
  let service: RickAndMortyService;
  let httpClientSpy: {get: jasmine.Spy};

  const expectedResponse: {} = {
    info: {},
    results: [
      {id: 0, name: 'testEp', airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RickAndMortyService(httpClientSpy as any);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Episode Objects', () => {
    httpClientSpy.get.and.returnValue(of(expectedResponse));
    // service.getAllEpisodes();
    service.getEpisodesObservable().subscribe(
      data => {
        // data.results.forEach((item) => {
        //   service.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
        //     item.characters, item.url));
        // });
        // build
        expect(data).toEqual(expectedResponse);
        // expect(service.episodes[0].id).toEqual(0);
      },
      error => console.log(error)
    );
  });

  // it('should return a single specific Episode Object', () => {
  //   service.episodes = expectedResponse['results'];
  //   const testEp: Episode = service.getEpisode(0);
  //   expect(testEp).toEqual(expectedResponse['results'][0]);
  // });
});
