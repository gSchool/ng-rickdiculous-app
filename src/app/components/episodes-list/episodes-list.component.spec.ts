import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodesListComponent } from './episodes-list.component';

describe('EpisodesListComponent', () => {
  let component: EpisodesListComponent;
  let fixture: ComponentFixture<EpisodesListComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of episodes', () => {
    expect(component.episodes).toBeDefined();
  });

  it('should render each episode', () => {
    expect(html.querySelector('app-episode-detail')).toBeDefined();
  });
});
