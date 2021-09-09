import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RicknmortyService } from '../allepisode.service';
import { Episode } from '../episode';
import { EpisodelistComponent } from '../episodelist/episodelist.component';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'


@Component({
  selector: 'app-epdetails',
  templateUrl: './epdetails.component.html',
  styleUrls: ['./epdetails.component.css']
})
export class EpdetailsComponent implements OnInit {
   episode : Episode;
   characters: String [];
  constructor(private episodeservice: RicknmortyService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let episodeid = this.route.snapshot.paramMap.get('id')
    this.episodeservice.singleepisode(episodeid).subscribe(data =>
              {
                this.episode = data;
              }
            )
  //   this.route.paramMap.subscribe((p: ParamMap) =>
  //    {

  //     let index = p.get('i')
  //       this.episodeservice.singleepisode(index).subscribe(data =>
  //         {
  //           this.episode = data;
  //         }
  //       )
  //   })
  }
}
