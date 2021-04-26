import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EpisodesListComponent } from '../episodes-list/episodes-list.component';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodeDetailComponent } from '../episode-detail/episode-detail.component';
import MockEpisodesService from '../../services/MockEpisodesService';


describe('LandingPage', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let html;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent, SearchFormComponent,
        EpisodesListComponent, EpisodeDetailComponent
      ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: EpisodesService, useClass: MockEpisodesService }]
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

  it('should render episode list component', () => {
    expect(html.querySelector('app-episodes-list')).toBeTruthy();
  });

  it('should handle search event', () => {
    const searchInput = html.querySelector('#searchField');
    const submitButton = html.querySelector('#submitSearch');
    const query = 'morty';
    spyOn(component, 'handleSearch');

    searchInput.value = query;
    submitButton.click();
    fixture.detectChanges();
    // FIXME: Why are the args not on the spy?
    expect(component.handleSearch).toHaveBeenCalled();
  });
});
