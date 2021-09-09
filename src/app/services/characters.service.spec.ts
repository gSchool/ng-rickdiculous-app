import { TestBed } from '@angular/core/testing';

import { CharactersService, charactersUrl } from './characters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiMortysponse } from './mock-characters.service';

// tslint:disable-next-line:max-line-length
const apiResponse: ApiMortysponse = { info: {}, results: [{ id: 1000, name: 'Mortysponse 1', status: 'alive', species: 'human', type: '', gender: 'woman', episode: [], image: '', url: '', created: '', location: {}, origin: {}} ]};

describe('CharactersService', () => {
  let service: CharactersService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CharactersService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('all() should return all characters', () => {
    service.all().subscribe(response => {
      expect(response).toEqual(apiResponse);
    }); // start request

    const res = httpTestController.expectOne(charactersUrl);
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above
  });

  it('getByUrl() should return character', () => {
    service.getByUrl(charactersUrl + '/1000').subscribe(character => {
      expect(character).toEqual(apiResponse.results[0]);
    }); // start request

    const res = httpTestController.expectOne(charactersUrl);
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above
  });

  it('getById() should return a character', () => {
    service.getById(1000).subscribe(character => {
      expect(character).toEqual(apiResponse.results[0]);
    }); // start request

    const res = httpTestController.expectOne(charactersUrl);
    res.flush(apiResponse);
    httpTestController.verify(); // assertion; expects one request to url above

  });
});
