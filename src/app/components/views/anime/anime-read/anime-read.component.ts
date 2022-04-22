import { Component, OnInit } from '@angular/core';
import { anime } from '../anime.model';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-read',
  templateUrl: './anime-read.component.html',
  styleUrls: ['./anime-read.component.css']
})
export class AnimeReadComponent implements OnInit {

  animes: anime[] = []

  displayedColumns: string[] = ['id', 'name', 'studio', 'genre', 'author', 'acoes'];

  constructor(private service: AnimeService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() 
  {
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.animes = answer;
    })
  }
}
