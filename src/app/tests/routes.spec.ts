import {fakeAsync, flush, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppRoutingModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('navigate to /home', fakeAsync(() => {
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('');
  }));
});
