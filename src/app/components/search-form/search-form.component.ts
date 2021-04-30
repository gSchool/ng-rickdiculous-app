import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../../services/search.service';
import {ApiRicksponse} from '../../services/episodes.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  @Output() searchEvent = new EventEmitter<ApiRicksponse>();

  constructor(private fb: FormBuilder, private service: SearchService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: '',
      searchOption: ''
    });
  }

  search(): void {
    const { query, searchOption } = this.searchForm.controls;
    this.service.searchByName(searchOption.value, query.value).subscribe(results => {
      this.searchEvent.emit(results);
    });
  }

}
