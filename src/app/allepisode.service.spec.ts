// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RicknmortyService } from './allepisode.service';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';
// import { EpisodelistComponent } from './episodelist/episodelist.component';
// import { Episode } from './episode';

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
//     service
//       .allepisodes()
//       .subscribe((data) => expect(service.episodesHolder).toEqual(data));
//     httpTestingController.expectOne(
//       'https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]'
//     );
//     httpTestingController.verify();
//   });

  // it('Test if function singleepisode returns an episode', () => {

  //   service.singleepisode("1").subscribe(data => {
  //     expect(data.id).toEqual(1);
  //   })

  // });
});
