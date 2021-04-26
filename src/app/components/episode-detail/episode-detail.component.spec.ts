import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { EpisodeDetailComponent } from './episode-detail.component';

describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an episode', () => {
    expect(component.episode).toBeUndefined();
  });
});
