import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';


import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(TestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
