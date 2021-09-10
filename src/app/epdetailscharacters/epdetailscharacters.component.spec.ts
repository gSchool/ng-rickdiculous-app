
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RicknmortyCharacterService } from '../allcharacters.service';
import { AppRoutingModule } from '../app-routing.module';
import { Location } from '@angular/common';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Episode } from '../episode';
import { single } from 'rxjs/operators';
import { query } from '@angular/animations';
import { of } from 'rxjs';
import { EpdetailscharactersComponent } from './epdetailscharacters.component';


describe('EpdetailsCharactersComponent', () => {
  let component: EpdetailscharactersComponent;
  let fixture: ComponentFixture<EpdetailscharactersComponent>;
  let service: RicknmortyCharacterService;
  let router: Router;
  let location: Location;
  let mockService;
  let mockActivatedroute;

  beforeEach(
    waitForAsync(() => {
      mockService = jasmine.createSpyObj(['singlecharacter']);
      mockService.singlecharacter.and.returnValue(
        of(
            {"id":239,"name":"Mr. Goldenfold","status":"Alive","species":"Cronenberg","type":"","gender":"Male","origin":
            {"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},
            "location":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},
            "image":"https://rickandmortyapi.com/api/character/avatar/239.jpeg","episode":[
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/6"],
                "url":"https://rickandmortyapi.com/api/character/239",
                "created":"2017-12-30T17:42:11.894Z"}));
      
      mockActivatedroute = { snapshot: { paramMap: { get: () => '1' } } };
      TestBed.configureTestingModule({
        imports: [RouterModule, AppRoutingModule],
        providers: [
          { provide: RicknmortyCharacterService, useValue: mockService },
          { provide: ActivatedRoute, useValue: mockActivatedroute },
        ],
        declarations: [EpdetailscharactersComponent],
      }).compileComponents();

      service = TestBed.inject(RicknmortyCharacterService);
      fixture = TestBed.createComponent(EpdetailscharactersComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      location = TestBed.inject(Location);
      component.input = ["https://rickandmortyapi.com/api/character/239"]
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Generates the correct list of characters of characters', fakeAsync(() => {
        const ep: HTMLElement = fixture.nativeElement.querySelector('img');
        fixture.detectChanges();
        expect(ep['src']).toContain(
          'https://rickandmortyapi.com/api/character/avatar/239.jpeg'
        );
      }));
});
