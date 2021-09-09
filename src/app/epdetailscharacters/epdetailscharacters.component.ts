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

  public characterimg: string[] =  [];
  @Input() input : string[];


  ngOnInit(): void
  {

    for(let characterurl of this.input)
    {
        this.characterservice.singlecharacter(characterurl.slice(42)).subscribe(data => {
          console.log(data.image)

          this.characterimg.unshift(data.image);
      })

      // this.characterservice.singlecharacter(characterurl.slice(42)).pipe(tap(

      //   data =>  console.log(data.image) )

      // )


    }

  }


}
