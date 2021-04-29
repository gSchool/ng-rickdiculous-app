import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { MockRMServiceService } from '../mock-rmservice.service';
import { RickAndMortyService } from '../rickandmorty.service';

import { EpisodeDetailComponent } from './episode-detail.component';

describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;
  let rmService: RickAndMortyService;
  let htmlElement: any;

  const expectedResponse: {} = {
    info: {},
    results: [
      {id: 0, name: 'testEp', airDate: 'whatever', episode: 'S01E01', url: 'testurl', characters: []}
    ]
  };

  const detailsProperties= ['#name', '#airdate', '#episode', '#characters'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ],
      providers: [{provide: RickAndMortyService, useClass: MockRMServiceService}],
            imports: [AppRoutingModule, RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    htmlElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a defined episode', () => {
    expect(component.episode).toBeTruthy();
  })

  it('should render episode details', () => {
  for(let property of detailsProperties)
    expect(htmlElement.querySelector(property)).toBeTruthy();
  });
});
