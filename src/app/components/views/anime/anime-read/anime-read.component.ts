import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
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

  constructor(private service: AnimeService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.checkIfIsLogged()
  }
  findAll():void
  {
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.animes = answer;
    })
  }

  navegarParaAnimeCreate():void
  {
    this.router.navigate(["animes/create"])
  }

  checkIfIsLogged():void
  {
    if(this.userService.isLogged) { this.findAll() }
    else 
    { 
      this.service.message("You need to be logged to see the animes listed!")
      this.router.navigate([''])
    }
  }
}
