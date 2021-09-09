import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RicknmortyService } from '../allepisode.service';
import { Episode } from '../episode';
import { EpisodelistComponent } from '../episodelist/episodelist.component';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { EpdetailscharactersComponent } from '../epdetailscharacters/epdetailscharacters.component';

@Component({
  selector: 'app-epdetails',
  templateUrl: './epdetails.component.html',
  styleUrls: ['./epdetails.component.css']
})
export class EpdetailsComponent implements OnInit {
   episode : Episode;
   characters: string [];
  constructor(private episodeservice: RicknmortyService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let episodeid = this.route.snapshot.paramMap.get('id')
    this.episodeservice.singleepisode(episodeid).subscribe(data =>
              {
                this.episode = data;
              }
            )


  }
}
