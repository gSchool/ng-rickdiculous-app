import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EpisodesListComponent } from '../app/components/episodes-list/episodes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesService } from '../app/services/episodes.service';
import {EpisodeDetailComponent} from '../app/components/episode-detail/episode-detail.component';

describe('Episodes Integration', () => {
  let fixture: ComponentFixture<EpisodesListComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ EpisodesListComponent, EpisodeDetailComponent ],
      providers: [ EpisodesService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesListComponent);
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {

  });

});
