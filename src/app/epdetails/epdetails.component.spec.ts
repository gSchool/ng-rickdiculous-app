import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RicknmortyService } from '../allepisode.service';
import { AppRoutingModule } from '../app-routing.module';
import { Location } from '@angular/common';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EpdetailsComponent } from './epdetails.component';
import { Episode } from '../episode';
import { single } from 'rxjs/operators';
import { query } from '@angular/animations';
import { of } from 'rxjs';


describe('EpdetailsComponent', () => {
  let component: EpdetailsComponent;
  let fixture: ComponentFixture<EpdetailsComponent>;
  let service: RicknmortyService;
  let router: Router;
  let location: Location;
  let mockService;
  let mockActivatedroute;

  beforeEach(
    waitForAsync(() => {
      mockService = jasmine.createSpyObj(['singleepisode']);
      mockService.singleepisode.and.returnValue(
        of({
          id: 1,
          name: 'Pilot',
          air_date: 'December 2, 2013',
          episode: 'S01E01',
          characters: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2',
            'https://rickandmortyapi.com/api/character/35',
            'https://rickandmortyapi.com/api/character/38',
            'https://rickandmortyapi.com/api/character/62',
            'https://rickandmortyapi.com/api/character/92',
            'https://rickandmortyapi.com/api/character/127',
            'https://rickandmortyapi.com/api/character/144',
            'https://rickandmortyapi.com/api/character/158',
            'https://rickandmortyapi.com/api/character/175',
            'https://rickandmortyapi.com/api/character/179',
            'https://rickandmortyapi.com/api/character/181',
            'https://rickandmortyapi.com/api/character/239',
            'https://rickandmortyapi.com/api/character/249',
            'https://rickandmortyapi.com/api/character/271',
            'https://rickandmortyapi.com/api/character/338',
            'https://rickandmortyapi.com/api/character/394',
            'https://rickandmortyapi.com/api/character/395',
            'https://rickandmortyapi.com/api/character/435',
          ],
          url: 'https://rickandmortyapi.com/api/episode/1',
          created: '2017-11-10T12:56:33.798Z',
        })
      );
      mockActivatedroute = { snapshot: { paramMap: { get: () => '1' } } };
      TestBed.configureTestingModule({
        imports: [RouterModule, AppRoutingModule],
        providers: [
          { provide: RicknmortyService, useValue: mockService },
          { provide: ActivatedRoute, useValue: mockActivatedroute },
        ],
        declarations: [EpdetailsComponent],
      }).compileComponents();

      service = TestBed.inject(RicknmortyService);
      fixture = TestBed.createComponent(EpdetailsComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      location = TestBed.inject(Location);

      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Generates an episode', fakeAsync(() => {
  //   component.episode = new Episode();
  //   const ep: HTMLElement = fixture.nativeElement;
  //   expect(component.episode).toBeTruthy()

  // }));

  it('Generates the correct episode details from ID', fakeAsync(() => {
    const ep: HTMLElement = fixture.nativeElement.querySelector('.episode');
    fixture.detectChanges();
    expect(ep.textContent).toContain('Title: Pilot');
  }));


});
