import { TestBed } from '@angular/core/testing';

import { EpisodeResolverService } from './episode-resolver.service';
import {EpisodesService} from '../services/episodes.service';
import MockEpisodesService from '../services/MockEpisodesService';

describe('PageResolverService', () => {
  let service: EpisodeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provider: EpisodesService, useClass: MockEpisodesService
        }
      ]
    });
    service = TestBed.inject(EpisodeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
