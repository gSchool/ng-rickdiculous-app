// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RicknmortyService } from './allepisode.service';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';
// import { EpisodelistComponent } from './episodelist/episodelist.component';
// import { Episode } from './episode';
// import { Observable } from 'rxjs';

// describe('RicknmortyService', () => {
//   let service: RicknmortyService;
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let component: EpisodelistComponent;
//   let fixture: ComponentFixture<EpisodelistComponent>;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });

//     service = TestBed.inject(RicknmortyService);
//     httpClient = TestBed.inject(HttpClient);
//     httpTestingController = TestBed.inject(HttpTestingController);
//     fixture = TestBed.createComponent(EpisodelistComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('Test if function allepisodes makes request', () => {

//     service.allepisodes().subscribe(data =>
//       {
//         expect(service.episodesHolder).toEqual(data.results));
//       }
//      )
//     const apiResponse: {} = {info: {}, results: [{name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};

//     const res = httpTestingController.expectOne( 'https://rickandmortyapi.com/api/episode/')
//     res.flush(apiResponse)
//     httpTestingController.verify();
//   });

//   // it('Test if function singleepisode returns an episode', () => {

//   //   service.singleepisode("1").subscribe(data => {
//   //     expect(data.id).toEqual(1);
//   //   })

//   // });

// })
// ;
