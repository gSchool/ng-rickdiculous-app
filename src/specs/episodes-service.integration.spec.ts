import { EpisodesService, episodesUrl } from '../app/services/episodes.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EpisodesService (integrated)', () => {
  let service: EpisodesService;
  let httpTestController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EpisodesService ]
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EpisodesService);
  }));

  it('all() should send one request to api', () => {
    service.all().subscribe(); // start request

    const request = httpTestController.expectOne(episodesUrl);
    request.flush({info: {}, results: []}); // data to return for request
    httpTestController.verify(); // assertion; expects one request to url above
  });
});
