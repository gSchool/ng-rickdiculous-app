import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  searchForm: FormGroup;

  constructor (private formBuilder: FormBuilder)
  {

  }
  onSubmit() : void{
   console.log(this.searchForm)
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ''
  })
  console.log(this.searchForm)
}
}
