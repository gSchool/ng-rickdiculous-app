import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { SearchdataService } from '../searchdata.service';
@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  public output: string = '';
  searchForm: FormGroup;

  constructor (private searchservice: SearchdataService, private router: Router, private formBuilder: FormBuilder)
  {

  }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
        search: ''
    })
    this.output = this.searchForm.get('search').value;
    console.log(this.searchForm)
    console.log("OUTPUT:",this.output)
  }
  onSubmit() : void{
    console.log("FORMGOUP RESULT:",this.searchForm.get('search').value)
    this.searchservice.input = this.searchForm.get('search').value
    this.router.navigate(['results']);



   }



}
