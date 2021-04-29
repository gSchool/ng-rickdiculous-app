import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../episode';
import { RickAndMortyService } from '../rickandmorty.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {
  public id: string;
  @Input() episode : Episode;
  @Input() characterList : [{}];

  constructor(private rmService: RickAndMortyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.rmService.getEpisodeObservable(this.id).subscribe(
        data => {
          this.episode = new Episode(data.id, data.name, data.air_date, data.episode, data.url, data.characters);
          this.rmService.getCharacterObservable(this.episode.characters).subscribe(
            data => {
              this.characterList = data;
            }
          );
        },
        error => {console.log(error)}
      );
    });
  }// end ngoninit
}
