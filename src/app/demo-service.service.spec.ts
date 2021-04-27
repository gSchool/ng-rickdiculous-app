import { TestBed } from '@angular/core/testing';

import { DemoServiceService } from './demo-service.service';

describe('DemoServiceService', () => {
  let service: DemoServiceService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoServiceService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all demo data', () => {
    httpClientSpy.get.and.returnValue([]);
    service.getAll().subscribe(data => {
      expect(data).toEqual([]);
    });
  });

});
