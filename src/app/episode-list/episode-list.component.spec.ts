import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import {RickAndMortyService} from '../rickandmorty.service';
import { HttpClientModule } from '@angular/common/http';
import {Episode} from '../episode';
import {of} from 'rxjs';
import { MockRMServiceService } from '../mock-rmservice.service';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let rmService: RickAndMortyService;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let htmlElement: any;
  let httpClientSpy: {get: jasmine.Spy};

  const expectedResponse: {} = {
    info: {},
    results: [
      {id: 0, name: 'testEp', airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
    ]
  };

  beforeEach(async () => {
    //const fakeRickMortyService = jasmine.createSpyObj('RickAndMortyService', [''])
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ EpisodeListComponent ],
      providers: [{provide: RickAndMortyService, useClass: MockRMServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a collection of episode elements', () => {
    fixture.detectChanges();
    expect(component.aList.length).toEqual(1);
    expect(htmlElement.querySelectorAll('app-episode').length).toBeGreaterThan(0);
  });
});
