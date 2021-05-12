import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EpisodesService } from '../services/episodes.service';
import { mergeMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolverService implements Resolve<any>{
  constructor(private service: EpisodesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const episodeId = +route.paramMap.get('id');

    return this.service.getById(episodeId)
      .pipe(
        take(1),
        mergeMap(episode => of(episode))
      );
  }
}
