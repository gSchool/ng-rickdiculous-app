import { RicknmortyCharacterService } from './allcharacters.service';
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
import CHARACTERTEST from 'src/charactertest.json'
import SCHARATEST from 'src/app/scharactertest.json'
import { importType } from '@angular/compiler/src/output/output_ast';
describe('RicknmortycharacterService', () => {


  let service: RicknmortyCharacterService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;



  beforeEach(() =>{ TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],});


  service = TestBed.inject(RicknmortyCharacterService)
  httpClient = TestBed.inject(HttpClient)
  httpTestingController = TestBed.inject(HttpTestingController)


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test if function allepisodes makes request and returns all episodes', () => {

    service.allcharacters().subscribe(data =>
       {
        expect(data).toEqual(CHARACTERTEST);
       }
     )
    const res = httpTestingController.expectOne( 'https://rickandmortyapi.com/api/character')
    res.flush(CHARACTERTEST)
    httpTestingController.verify();
  });

  it('Test if function singleepisode makes request and returns a single episode', () => {
    service.singlecharacter('1').subscribe(data =>
      {
       expect(data).toEqual(SCHARATEST);
      }
    )
   const res = httpTestingController.expectOne( 'https://rickandmortyapi.com/api/character/1')
   res.flush(SCHARATEST)
   httpTestingController.verify();
  });
});
