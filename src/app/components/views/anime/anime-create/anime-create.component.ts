import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: AnimeService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void
  {
    this.service.create(this.anime).subscribe((answer) => {
      this.service.message('Anime successfully created!')
      this.router.navigate(['animes'])
    }) 
  }

  add_studio(studios: String): void
  {
    this.anime.studio[this.studio_counter] = studios;
    this.studio_counter++;
  }

  add_genre(genres: String): void
  {
    this.anime.genre[this.genre_counter] = genres;
    this.genre_counter++;
  }

  cancel():void
  {
    this.router.navigate(['animes'])
  }
}
