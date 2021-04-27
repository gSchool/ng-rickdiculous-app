import {fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RickAndMortyService } from './rickandmorty.service';
import {Episode} from './episode';
import {of} from 'rxjs';
import * as http from 'http';



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
    service = TestBed.inject(RickAndMortyService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should query RickandMortyApi for data', () => {
  //   httpClientSpy.get.and.returnValue(of(expectedResponse));
  //
  //
  //   service.getAll().subscribe(data => {
  //     expect(data).toEqual(service);
  //   });
  // });

  it('should return a list of Episode Objects', () => {
    httpClientSpy.get.and.returnValue(expectedResponse);
    // service.getAllEpisodes();
    service.getAll().subscribe(
      data => {
        data.results.forEach((item) => {
          service.episodes.push(new Episode(item.id, item.name, item.air_date, item.episode,
            item.characters, item.url));
        });

        expect(service.episodes).toBeTruthy();
        expect(service.episodes[0].id).toEqual(1);
      },
      error => console.log(error)
    );
  });

  // it('should have a model for Episode', () => {
  //   const episodeModel: Episode = {
  //     info
  //   }
  // });
});
