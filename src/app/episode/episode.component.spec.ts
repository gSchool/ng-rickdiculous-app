import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Episode } from '../episode';
import { MockRMServiceService } from '../mock-rmservice.service';
import { RickAndMortyService } from '../rickandmorty.service';

import { EpisodeComponent } from './episode.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;
  let router: Router;
  let location: Location;
  let htmlElement: any;
  const episodeProperties= ['.card', '.card-title', '.card-subtitle', '.card-text'];

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeComponent ],
      providers: [{provide: RickAndMortyService, useClass: MockRMServiceService}],
      imports: [AppRoutingModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    htmlElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a defined episode object', () => {
    expect(component.episode).toBeTruthy();
  });

  it('should render the card elements', () => {
    for(let property of episodeProperties)
      expect(htmlElement.querySelector(property)).toBeTruthy();
  });

  it('should route to details page when episode is clicked', fakeAsync(() =>{
    let detailsButton = htmlElement.querySelector('a');
    detailsButton.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toEqual('/episode/0');
  }))

});
