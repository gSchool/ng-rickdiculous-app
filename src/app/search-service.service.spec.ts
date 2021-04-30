import { TestBed } from '@angular/core/testing';

import { SearchServiceService } from './search-service.service';

describe('SearchServiceService', () => {
  let service: SearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to update the services\'s data', () => {
    service.sendSearch('testData');
    service.searchSend$.subscribe(
      data => {
        expect(data).toEqual('testData');
      }
    )
  })
});
