import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';


let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;
let router: Router;
let location: Location;
let htmlElement: any;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule, RouterTestingModule, AppRoutingModule
      ],
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    htmlElement = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should load home page initially', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
    expect(htmlElement.querySelector('app-home')).toBeTruthy();
  }));
});
