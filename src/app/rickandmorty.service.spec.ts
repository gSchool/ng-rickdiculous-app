import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';


import { RickAndMortyService } from './rickandmorty.service';

describe('TestingService', () => {
  let service: RickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(RickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a model for Episode', () => {
  //   const episodeModel: Episode = {
  //     info
  //   }
  // });
});
