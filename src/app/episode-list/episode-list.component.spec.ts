import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import {RickAndMortyService} from '../rickandmorty.service';
import { HttpClientModule } from '@angular/common/http';
import {Episode} from '../episode';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let rmService: RickAndMortyService;
  let fixture: ComponentFixture<EpisodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ EpisodeListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    rmService = TestBed.inject(RickAndMortyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject rick and morty service into list component', () => {
    expect(rmService).toBeTruthy();
  });

  it('should obtain a list of movies from the service', () => {
    rmService.buildEpisodes();
    const epList: Episode[] = rmService.episodes;
    expect(epList.length).toBeGreaterThan(0);
  });
});
