import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchformComponent } from './searchform.component';

describe('SearchformComponent', () => {
  let component: SearchformComponent;
  let fixture: ComponentFixture<SearchformComponent>;
  let element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],

      declarations: [ SearchformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should send input to formGroup ', () => {

    const searchField = component.searchForm.controls['search'];
    const btn : HTMLElement = fixture.nativeElement.querySelector('.btn')
    searchField.setValue('hello')
    btn.click
    fixture.detectChanges;
    expect(searchField.valid).toBeTruthy();

  // it('if invalid email, button unclickable(disabled)', () => {
  //     const emailField = component.loginForm.controls.email;
  //     emailField.setValue('bademaili');
  //     fixture.detectChanges;
  //     expect(element.querySelector('#loginBtn').disabled).toBeTrue();
  //   });

  });

});
