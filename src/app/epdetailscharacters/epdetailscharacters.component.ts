import { Component, OnInit, Input } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RicknmortyCharacterService } from '../allcharacters.service';
import { Character } from '../character';


interface CharacterResponse {
  info: any;
  results: Character[];
}

@Component({
  selector: 'app-epdetailscharacters',
  templateUrl: './epdetailscharacters.component.html',
  styleUrls: ['./epdetailscharacters.component.css']
})
export class EpdetailscharactersComponent implements OnInit {

  constructor(private characterservice: RicknmortyCharacterService) { }

  charidfromurl: string = '';
  public characterimg: string[] = [];
  @Input() input : string[];


  ngOnInit(): void
  {

    for(let characterurl of this.input)
    {
      //obtaining character urls from epdetail component and slicing out the id to retreive the image
        this.charidfromurl = characterurl.slice(42)
        this.characterservice.singlecharacter(this.charidfromurl).subscribe(data => {
          console.log(data.image)

          this.characterimg.unshift(data.image);
      })



    }

  }




}
