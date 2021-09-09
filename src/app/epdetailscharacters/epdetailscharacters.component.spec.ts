import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpdetailscharactersComponent } from './epdetailscharacters.component';

describe('EpdetailscharactersComponent', () => {
  let component: EpdetailscharactersComponent;
  let fixture: ComponentFixture<EpdetailscharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpdetailscharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpdetailscharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
