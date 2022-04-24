import { Component, OnInit } from '@angular/core';
import { anime } from '../anime.model';
import { AnimeService } from '../anime.service';


@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.css']
})
export class AnimeCreateComponent implements OnInit {
  
  getStudio: string = '';
  getGenre: string = '';
  studio_counter: number = 0;
  genre_counter: number = 0;

  anime: anime = 
  {
    name: '',
    studio: [],
    genre: [],
    author: ''
  }

  constructor(private service: AnimeService) { }

  ngOnInit(): void {
  }

  create(): void
  {
    this.service.create(this.anime).subscribe((answer) => {
      console.log(answer);
    }) 
  }

  add_studio(studios: String): void
  {
    this.anime.studio[this.studio_counter] = studios;
    this.studio_counter++;
    console.log(this.anime.studio)
  }

  add_genre(genres: String): void
  {
    this.anime.genre[this.genre_counter] = genres;
    this.genre_counter++;
    console.log(this.anime.genre)
  }

}
