import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RicknmortyService } from '../allepisode.service';
import { AppRoutingModule } from '../app-routing.module';
import { Location } from '@angular/common';
import { Routes,RouterModule, Router, ActivatedRoute} from '@angular/router';
import {RouterTestingModule } from '@angular/router/testing';
import { EpdetailsComponent } from './epdetails.component';
import { Episode } from '../episode';
import { single } from 'rxjs/operators';


describe('EpdetailsComponent', () => {
  let component: EpdetailsComponent;
  let fixture: ComponentFixture<EpdetailsComponent>;
  let service: RicknmortyService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;
  let location: Location;
  let mockService;
  let mockActivatedroute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule, AppRoutingModule],
      providers: [
        { provider: service, useValue: mockService },
        { provider: ActivatedRoute, useValue: mockActivatedroute }]
    });
    mockService = jasmine.createSpyObj(['getById']);
    mockActivatedroute = { snapshot: { paramMap: { get: () => '1' }}};
    service = TestBed.inject(RicknmortyService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(EpdetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Generates an episode', fakeAsync(() => {

    component.episode = new Episode();
    const ep: HTMLElement = fixture.nativeElement;
    expect(ep.innerHTML).toContain('episode')

  }));

  it('Generates an episode', fakeAsync(() => {
    mockService = jasmine.createSpyObj([service.singleepisode('1')])
    const ep: HTMLElement = fixture.nativeElement;
  expect(ep.innerHTML).toContain('episode')
  }));


});
