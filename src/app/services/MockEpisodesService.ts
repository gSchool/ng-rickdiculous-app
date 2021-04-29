import { Observable, of } from 'rxjs';
import { Episode } from '../models/episode';

const episode = new Episode();
episode.id = 1;

export default class MockEpisodesService {
  results = { results: [{ name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};
  episodes = this.results.results;

  all(): Observable<any> {
    return of(this.results);
  }

  getById(id): Episode {
    return episode;
  }
}
