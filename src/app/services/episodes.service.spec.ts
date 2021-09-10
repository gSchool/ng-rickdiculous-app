import { TestBed, waitForAsync } from '@angular/core/testing';

import { ApiRicksponse, EpisodesService, episodesUrl } from './episodes.service';
import { of, throwError } from 'rxjs';
import { Episode } from '../models/episode';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import EpicFailError from '../shared/epic-fail.error';

// tslint:disable-next-line:max-line-length
const apiResponse: ApiRicksponse = {info: {}, results: [{name: 'Testor-Morty', episode: 'TEST02', id: 123, air_date: 'May 1, 2014', characters: []}]};

describe('EpisodesService HTTP', () => {
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

    httpTestController.expectOne(episodesUrl);
    httpTestController.verify(); // assertion; expects one request to url above
  });

  it('getById() should epic-ly fail on unsuccessful request', () => {
    let epicFail: EpicFailError = null;
    let success: any = null;
    service.getById(10000).subscribe({
      next: res => success = res,
      error: err => epicFail = err  // set value to assert expectations later
    });

    const request = httpTestController.expectOne(`${episodesUrl}10000`);
    request.error(new ErrorEvent('EpicFailError'), { status: 500, statusText: 'Not found.' });
    httpTestController.verify();
    expect(epicFail.status).toEqual(500);
    expect(success).toBeNull();
  });

  it('getByUrl() should send one request to api', () => {
    const episode = new Episode();

    service.getByUrl('https://myapp.com/someUrl').subscribe(data => {
      expect(data).toEqual(episode);
    }); // start request

    const res = httpTestController.expectOne('https://myapp.com/someUrl');
    res.flush(episode);
    httpTestController.verify(); // assertion; expects one request to url above
  });

  it('getByName() should return episode on success', () => {
    service.getByName('My Episode').subscribe(data => {
      expect(data).toEqual(apiResponse);
    }); // start request

    const res = httpTestController.expectOne(episodesUrl + '?name=My Episode');
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above
  });

  xit('getByName() should epicly fail on unsuccessful request', () => {

  });
});
