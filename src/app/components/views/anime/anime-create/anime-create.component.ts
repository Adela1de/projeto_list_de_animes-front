import { Component, OnInit } from '@angular/core';
import { anime } from '../anime.model';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.css']
})
export class AnimeCreateComponent implements OnInit {
  
  
  anime: anime = {
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

}
