import { Component, OnInit } from '@angular/core';
import { RicknmortyCharacterService } from '../allcharacters.service';
import { RicknmortyService } from '../allepisode.service';
import { Character } from '../character';


interface CharacterResponse {
  info: any;
  results: Character[];
}

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterlistComponent implements OnInit {
  public characters: CharacterResponse["results"]
  public character: CharacterResponse["results"]
  public characterimg: string;
  public characterimgarray: string[] = [];
  constructor(private characterservice: RicknmortyCharacterService) {}

  ngOnInit(): void {
    // console.log('Before subscribe')
    this.characterservice.allcharacters().subscribe(data => {
      // console.log('Suscribing...')
      this.characters = data.results;
      console.log(this.characters)
    // for(let characterurl of this.characters){
    //     this.characterimg = characterurl.image.slice(42)
    //     this.characterservice.singlecharacter(this.characterimg).subscribe(data => {
    //       console.log(data.image)
    //            this.characterimgarray.unshift(data.image)
    //     })
    }

   );


}

}


