import { TestBed } from '@angular/core/testing';

import { MockRMServiceService } from './mock-rmservice.service';

describe('MockRMServiceService', () => {
  let service: MockRMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
