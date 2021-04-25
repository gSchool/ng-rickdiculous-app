import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create search form', () => {
    expect(component.searchForm).toBeTruthy();
  });

  it('should render search query text field', () => {
    expect(html.querySelector('#searchField').value).toBeDefined();
    expect(component.searchForm.controls.query.value).toBeDefined();
  });

  it('should render `Search` on submit button', () => {
    expect(html.querySelector('#submitSearch').value).toEqual('Search');
  });

  it('should emit search event on submit', () => {
    spyOn(component, 'search');
    const button = html.querySelector('#submitSearch');
    button.click();
    expect(component.search).toHaveBeenCalled();
  });
});
