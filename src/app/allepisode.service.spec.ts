import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RicknmortyService } from './allepisode.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { EpisodelistComponent } from './episodelist/episodelist.component';
import { Episode } from './episode';
import { Observable } from 'rxjs';
import EPISODETEST from 'src/episodetest.json';
import SEPTEST from 'src/sepisodetest.json';
describe('RicknmortyService', () => {
  let service: RicknmortyService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(RicknmortyService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test if function allepisodes makes request and returns all episodes', () => {

    service.allepisodes().subscribe(data =>
       {
        expect(data).toEqual(EPISODETEST);
       }
     )
    const res = httpTestingController.expectOne( 'https://rickandmortyapi.com/api/episode')
    res.flush(EPISODETEST)
    httpTestingController.verify();
  });

  it('Test if function singleepisode makes request and returns a single episode', () => {
    service.singleepisode('28').subscribe(data =>
      {
       expect(data).toEqual(SEPTEST);
      }
    )
   const res = httpTestingController.expectOne( 'https://rickandmortyapi.com/api/episode/28')
   res.flush(SEPTEST)
   httpTestingController.verify();
  });

})
;
