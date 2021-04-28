import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let router: Router;
  let location: Location;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppRoutingModule ],
      declarations: [ SideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar', () => {
    expect(html.querySelector('nav')).toBeTruthy();
  });

  it('navigate to /home', fakeAsync(() => {
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('navigate to /episode', fakeAsync(() => {
    router.navigate(['episode']);
    tick();
    expect(location.path()).toBe('/episode');
  }));

});
