import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EpisodesService } from '../services/episodes.service';
import { mergeMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Episode} from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolverService implements Resolve<Episode>{
  constructor(private service: EpisodesService) {}

  /**
   * @link https://angular.io/api/router/Resolve
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const episodeId: number = +route.paramMap.get('id');

    return this.service.getById(episodeId)
      .pipe(
        take(1),
        mergeMap(episode => of(episode))
      );
  }
}
