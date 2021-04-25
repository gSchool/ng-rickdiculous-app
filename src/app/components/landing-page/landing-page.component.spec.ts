import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { SearchFormComponent } from '../search-form/search-form.component';

describe('LandingPage', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let html;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent, SearchFormComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  }));

  it('should create the landing-page', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render search form', () => {
    // Remember: toBeTruthy() will fail for null values. toBeDefined() wont!
    expect(html.querySelector('app-search-form')).toBeTruthy();
  });
});
