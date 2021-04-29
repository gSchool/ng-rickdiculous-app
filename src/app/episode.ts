export class Episode {
  id: number;
  name: string;
  airDate ?: string;
  episode: string;
  url ?: string;
  characters ?: string[];

  constructor(id: number, name: string, airDate: string = '', episode: string, url: string = '', characters: string[] = []) {
    this.id = id;
    this.name = name;
    this.airDate = airDate;
    this.episode = episode;
    this.url = url;
    this.characters = characters;
  }
}
