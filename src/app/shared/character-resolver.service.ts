import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { CharactersService } from '../services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverService {

  constructor(private service: CharactersService) { }

  /**
   * @link https://angular.io/api/router/Resolve
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const characterId: number = +route.paramMap.get('id');

    return this.service.getById(characterId)
      .pipe(
        take(1),
        mergeMap(character => of(character))
      );
  }
}
